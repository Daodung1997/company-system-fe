import Api from "~/utils/api";

const rootPath = "/transactions";

// Transaction CRUD APIs
export const GET_TRANSACTIONS = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = rootPath;
  return Api.get(url, { params }).then(successCallback).catch(errorCallback);
};

export const GET_TRANSACTION = (id: number, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${id}`;
  return Api.get(url).then(successCallback).catch(errorCallback);
};

export const CREATE_TRANSACTION = (data: any, successCallback: Function, errorCallback: Function) => {
  const url = rootPath;
  return Api.post(url, data).then(successCallback).catch(errorCallback);
};

export const UPDATE_TRANSACTION = (id: number, data: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${id}`;
  return Api.put(url, data).then(successCallback).catch(errorCallback);
};

export const DELETE_TRANSACTION = (id: number, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${id}`;
  return Api.delete(url).then(successCallback).catch(errorCallback);
};
