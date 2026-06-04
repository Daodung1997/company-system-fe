import Api from "~/utils/api";

const rootPathUser = "/auth";

export const LOGIN_USER = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPathUser}/login`;
  const data = params.payload.data;
  return Api.post(url, data).then(successCallback).catch(errorCallback);
};

export const LOGOUT = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPathUser}/logout`;
  return Api.post(url, {}).then(successCallback).catch(errorCallback);
};

export const GET_ME = (successCallback: Function, errorCallback: Function) => {
  const url = `${rootPathUser}/me`;
  return Api.get(url).then(successCallback).catch(errorCallback);
};

export const FORGOT_PASSWORD = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPathUser}/forgot-password`;
  const data = params.payload.data;
  return Api.post(url, data).then(successCallback).catch(errorCallback);
};

export const RESET_PASSWORD = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPathUser}/reset-password`;
  const data = params.payload.data;
  return Api.post(url, data).then(successCallback).catch(errorCallback);
};

export const CHANGE_PASSWORD = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPathUser}/change-password`;
  const data = params.payload.data;
  return Api.post(url, data).then(successCallback).catch(errorCallback);
};
