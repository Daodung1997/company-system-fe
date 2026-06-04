import {
  LOGIN_USER,
  LOGOUT,
  GET_ME,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
} from "~/apis/auth";

export function useAuth() {
  const loginUser = (payload: any) => {
    const { successCallback, errorCallback } = payload;
    return LOGIN_USER({ payload }, successCallback, errorCallback);
  };

  const logout = (payload: any) => {
    const { successCallback, errorCallback } = payload;
    return LOGOUT({ payload }, successCallback, errorCallback);
  };

  const getMe = (payload: any) => {
    const { successCallback, errorCallback } = payload;
    return GET_ME(successCallback, errorCallback);
  };

  const forgotPassword = (payload: any) => {
    const { successCallback, errorCallback } = payload;
    return FORGOT_PASSWORD({ payload }, successCallback, errorCallback);
  };

  const resetPassword = (payload: any) => {
    const { successCallback, errorCallback } = payload;
    return RESET_PASSWORD({ payload }, successCallback, errorCallback);
  };

  const changePassword = (payload: any) => {
    const { successCallback, errorCallback } = payload;
    return CHANGE_PASSWORD({ payload }, successCallback, errorCallback);
  };

  return {
    loginUser,
    logout,
    getMe,
    forgotPassword,
    resetPassword,
    changePassword,
  };
}
