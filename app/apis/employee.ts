import Api from "~/utils/api";

const rootPath = "/employees";

// Employee CRUD
export const GET_EMPLOYEES = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = rootPath;
  return Api.get(url, { params }).then(successCallback).catch(errorCallback);
};

export const GET_EMPLOYEE = (id: number, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${id}`;
  return Api.get(url).then(successCallback).catch(errorCallback);
};

export const CREATE_EMPLOYEE = (data: any, successCallback: Function, errorCallback: Function) => {
  const url = rootPath;
  return Api.post(url, data).then(successCallback).catch(errorCallback);
};

export const UPDATE_EMPLOYEE = (id: number, data: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${id}`;
  return Api.put(url, data).then(successCallback).catch(errorCallback);
};

export const DELETE_EMPLOYEE = (id: number, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${id}`;
  return Api.delete(url).then(successCallback).catch(errorCallback);
};

// Employee Relatives
export const GET_EMPLOYEE_RELATIVES = (employeeId: number, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${employeeId}/relatives`;
  return Api.get(url).then(successCallback).catch(errorCallback);
};

export const CREATE_EMPLOYEE_RELATIVE = (employeeId: number, data: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${employeeId}/relatives`;
  return Api.post(url, data).then(successCallback).catch(errorCallback);
};

export const UPDATE_EMPLOYEE_RELATIVE = (employeeId: number, relativeId: number, data: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${employeeId}/relatives/${relativeId}`;
  return Api.put(url, data).then(successCallback).catch(errorCallback);
};

export const DELETE_EMPLOYEE_RELATIVE = (employeeId: number, relativeId: number, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${employeeId}/relatives/${relativeId}`;
  return Api.delete(url).then(successCallback).catch(errorCallback);
};

// Employee Documents
export const UPLOAD_EMPLOYEE_DOCUMENT = (employeeId: number, data: any, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${employeeId}/documents`;
  return Api.post(url, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(successCallback).catch(errorCallback);
};

export const DELETE_EMPLOYEE_DOCUMENT = (documentId: number, successCallback: Function, errorCallback: Function) => {
  const url = `/documents/${documentId}`;
  return Api.delete(url).then(successCallback).catch(errorCallback);
};
