import Api from "~/utils/api";

const rootPath = "/master/company";

export const GET_COMPANIES = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}?${params.payload.query}`;
  return Api.get(url).then(successCallback).catch(errorCallback);
};

export const GET_COMPANY_BY_ID = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${params.payload.id}`;
  return Api.get(url).then(successCallback).catch(errorCallback);
};

export const CREATE_COMPANY = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/create`;
  const data = params.payload.data;
  return Api.post(url, data).then(successCallback).catch(errorCallback);
};

export const UPDATE_COMPANY = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${params.payload.id}`;
  const data = params.payload.data;
  return Api.put(url, data).then(successCallback).catch(errorCallback);
};

export const DELETE_COMPANY = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${params.payload.id}`;
  return Api.delete(url).then(successCallback).catch(errorCallback);
};
