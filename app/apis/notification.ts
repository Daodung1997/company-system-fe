import Api from "~/utils/api";

const rootPath = "/notifications";

// Get paginated notifications for current user
export const GET_NOTIFICATIONS = (params: any, successCallback: Function, errorCallback: Function) => {
  return Api.get(rootPath, { params }).then(successCallback).catch(errorCallback);
};

// Get unread count
export const GET_UNREAD_COUNT = (successCallback: Function, errorCallback: Function) => {
  return Api.get(`${rootPath}/unread-count`).then(successCallback).catch(errorCallback);
};

// Mark a single notification as read
export const MARK_NOTIFICATION_READ = (id: number, successCallback: Function, errorCallback: Function) => {
  return Api.put(`${rootPath}/${id}/read`).then(successCallback).catch(errorCallback);
};

// Mark all notifications as read
export const MARK_ALL_NOTIFICATIONS_READ = (successCallback: Function, errorCallback: Function) => {
  return Api.put(`${rootPath}/read-all`).then(successCallback).catch(errorCallback);
};
