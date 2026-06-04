import axios from "axios";
import Cookies from "js-cookie";
import { APP_TOKEN_NAME } from "~/config/constants";
import { useApiStore } from "~/stores/api";
import { showMessage } from "./global";

const Service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL || 'http://localhost/api',
  headers: {
    Accept: "application/json",
  },
});

let isRefreshing = false;
let failedQueue: any[] = [];
let isInvalid = false;

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

Service.interceptors.request.use(
  (config) => {
    const apiStore = useApiStore();
    apiStore.incrementLoading();

    const accessToken = Cookies.get(APP_TOKEN_NAME);
    if (accessToken && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    // Set device header if possible
    if (import.meta.client) {
      config.headers['device'] = navigator?.userAgent || '';
    }

    return config;
  },
  (error) => {
    const apiStore = useApiStore();
    apiStore.decrementLoading();
    return Promise.reject(error);
  }
);

Service.interceptors.response.use(
  (response) => {
    isInvalid = false;
    const apiStore = useApiStore();
    apiStore.decrementLoading();
    return response;
  },
  async (error) => {
    const apiStore = useApiStore();
    apiStore.decrementLoading();
    
    const originalRequest = error.config;
    const status = error?.response?.status;
    const responseData = error?.response?.data;
    // Support both: { messages: { message: "...", error_code: "..." } } (BusinessException)
    // and: { messages: ["..."] } (validation / old format)
    const messages = responseData?.messages;
    const messageKey = Array.isArray(messages) ? messages[0] : (messages?.message || messages?.error_code || "");

    // Handle 401 Unauthorized
    if (status === 401) {
      // 1. Handle Token Expired - Attempt Refresh
      if (messageKey === 'token.expired' && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise(function (resolve, reject) {
            failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              originalRequest.headers['Authorization'] = `Bearer ${token}`;
              return Service(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const newToken = await refreshAccessToken();
          if (newToken) {
            isRefreshing = false;
            processQueue(null, newToken);
            originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
            return Service(originalRequest);
          }
        } catch (refreshError) {
          processQueue(refreshError, null);
          isRefreshing = false;
          handleLogout();
          return Promise.reject(refreshError);
        }
      }

      // 2. Handle Token Invalid/Unauthorized
      if (messageKey === 'token.invalid' || messageKey === 'auth.unauthorized' || messageKey === 'token.blacklist') {
        if (!isInvalid) {
          isInvalid = true;
          showMessage("error", "Session Expired", "Your session has expired or is invalid. Please login again.");
          handleLogout();
        }
        return Promise.reject(error);
      }
    }

    // Handle other errors (400, 422, 500 etc)
    errorResponseCallback(error);
    return Promise.reject(error);
  }
);

const handleLogout = () => {
  Cookies.remove(APP_TOKEN_NAME, { path: '/' });
  if (import.meta.client) {
    localStorage.removeItem('userInfo');
    window.location.href = '/login';
  }
};

const errorResponseCallback = (error: any) => {
  const status = error?.response?.status;
  const data = error?.response?.data;
  const messages = data?.messages;
  // Extract message from both object and array formats
  const errorMsg = Array.isArray(messages)
    ? messages[0]
    : (messages?.message || "Có lỗi xảy ra.");

  switch (status) {
    case 400:
      showMessage("error", "Lỗi yêu cầu", errorMsg);
      break;
    case 422:
      showMessage("warn", "Dữ liệu không hợp lệ", errorMsg || "Vui lòng kiểm tra lại dữ liệu đã nhập.");
      break;
    case 403:
      showMessage("error", "Từ chối truy cập", errorMsg || "Bạn không có quyền thực hiện hành động này.");
      break;
    case 404:
      showMessage("warn", "Không tìm thấy", errorMsg);
      break;
    case 429:
      showMessage("warn", "Quá nhiều yêu cầu", errorMsg);
      break;
    case 500:
      showMessage("error", "Lỗi hệ thống", "Đã xảy ra lỗi từ phía máy chủ. Vui lòng thử lại sau.");
      break;
    default:
      if (status !== 401) {
        showMessage("error", "Lỗi", errorMsg);
      }
      break;
  }
};

async function getNewRefreshToken() {
  const accessToken = Cookies.get(APP_TOKEN_NAME);
  // Using Service instead of axios to ensure baseURL and other defaults are used, 
  // but we must be careful not to trigger interceptors in a way that causes recursion if not handled.
  // Actually, using a clean axios instance for the refresh call is safer to avoid interceptor side effects.
  return axios.post(
    `${import.meta.env.VITE_APP_API_URL || 'http://localhost/api'}/auth/refresh-token`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
}

const refreshAccessToken = async () => {
  try {
    const response = await getNewRefreshToken();
    const newToken = response?.data?.data?.access_token;
    if (newToken) {
      // Set cookie with late-night expiry as per user logic (optional but implemented similar logic)
      const expiry = new Date();
      expiry.setUTCHours(23, 59, 59, 999);
      Cookies.set(APP_TOKEN_NAME, newToken, { expires: expiry, path: '/' });
      return newToken;
    }
  } catch (error) {
    console.error("Token refresh failed", error);
  }
  return null;
};

export default Service;
