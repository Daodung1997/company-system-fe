import Api from "~/utils/api";

const rootPath = "/contracts";

// Contract CRUD APIs
export const GET_CONTRACTS = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = rootPath;
  return Api.get(url, { params }).then(successCallback).catch(errorCallback);
};

export const GET_CONTRACT = (id: number, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${id}`;
  return Api.get(url).then(successCallback).catch(errorCallback);
};

export const CREATE_CONTRACT = (data: any, successCallback: Function, errorCallback: Function) => {
  const url = rootPath;
  return Api.post(url, data).then(successCallback).catch(errorCallback);
};

export const UPDATE_CONTRACT = (id: number, data: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${id}`;
  return Api.put(url, data).then(successCallback).catch(errorCallback);
};

export const DELETE_CONTRACT = (id: number, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${id}`;
  return Api.delete(url).then(successCallback).catch(errorCallback);
};
