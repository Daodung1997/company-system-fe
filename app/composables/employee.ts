import {
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  GET_EMPLOYEE_RELATIVES,
  CREATE_EMPLOYEE_RELATIVE,
  UPDATE_EMPLOYEE_RELATIVE,
  DELETE_EMPLOYEE_RELATIVE,
  UPLOAD_EMPLOYEE_DOCUMENT,
  DELETE_EMPLOYEE_DOCUMENT,
} from "~/apis/employee";

export function useEmployee() {
  const getEmployees = (payload: any) => {
    const { params, successCallback, errorCallback } = payload;
    return GET_EMPLOYEES(params, successCallback, errorCallback);
  };

  const getEmployee = (payload: any) => {
    const { id, successCallback, errorCallback } = payload;
    return GET_EMPLOYEE(id, successCallback, errorCallback);
  };

  const createEmployee = (payload: any) => {
    const { data, successCallback, errorCallback } = payload;
    return CREATE_EMPLOYEE(data, successCallback, errorCallback);
  };

  const updateEmployee = (payload: any) => {
    const { id, data, successCallback, errorCallback } = payload;
    return UPDATE_EMPLOYEE(id, data, successCallback, errorCallback);
  };

  const deleteEmployee = (payload: any) => {
    const { id, successCallback, errorCallback } = payload;
    return DELETE_EMPLOYEE(id, successCallback, errorCallback);
  };

  // Relatives
  const getRelatives = (payload: any) => {
    const { employeeId, successCallback, errorCallback } = payload;
    return GET_EMPLOYEE_RELATIVES(employeeId, successCallback, errorCallback);
  };

  const createRelative = (payload: any) => {
    const { employeeId, data, successCallback, errorCallback } = payload;
    return CREATE_EMPLOYEE_RELATIVE(employeeId, data, successCallback, errorCallback);
  };

  const updateRelative = (payload: any) => {
    const { employeeId, relativeId, data, successCallback, errorCallback } = payload;
    return UPDATE_EMPLOYEE_RELATIVE(employeeId, relativeId, data, successCallback, errorCallback);
  };

  const deleteRelative = (payload: any) => {
    const { employeeId, relativeId, successCallback, errorCallback } = payload;
    return DELETE_EMPLOYEE_RELATIVE(employeeId, relativeId, successCallback, errorCallback);
  };

  const uploadDocument = (payload: any) => {
    const { employeeId, data, successCallback, errorCallback } = payload;
    return UPLOAD_EMPLOYEE_DOCUMENT(employeeId, data, successCallback, errorCallback);
  };

  const deleteDocument = (payload: any) => {
    const { documentId, successCallback, errorCallback } = payload;
    return DELETE_EMPLOYEE_DOCUMENT(documentId, successCallback, errorCallback);
  };

  return {
    getEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getRelatives,
    createRelative,
    updateRelative,
    deleteRelative,
    uploadDocument,
    deleteDocument,
  };
}
