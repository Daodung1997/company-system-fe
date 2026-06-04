import Api from "~/utils/api";

const rootPath = "/master/department";

export const GET_DEPARTMENTS = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}?${params.payload.query}`;
  return Api.get(url).then(successCallback).catch(errorCallback);
};

export const GET_DEPARTMENT_BY_ID = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${params.payload.id}`;
  return Api.get(url).then(successCallback).catch(errorCallback);
};

export const CREATE_DEPARTMENT = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/create`;
  const data = params.payload.data;
  return Api.post(url, data).then(successCallback).catch(errorCallback);
};

export const UPDATE_DEPARTMENT = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${params.payload.id}`;
  const data = params.payload.data;
  return Api.put(url, data).then(successCallback).catch(errorCallback);
};

export const DELETE_DEPARTMENT = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${params.payload.id}`;
  return Api.delete(url).then(successCallback).catch(errorCallback);
};
