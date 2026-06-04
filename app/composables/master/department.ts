import {
  GET_DEPARTMENTS,
  GET_DEPARTMENT_BY_ID,
  CREATE_DEPARTMENT,
  UPDATE_DEPARTMENT,
  DELETE_DEPARTMENT,
} from "~/apis/master/department";

export function useDepartment() {
  const getDepartments = (payload: any) => {
    return GET_DEPARTMENTS({ payload }, payload.successCallback, payload.errorCallback);
  };
  const getDepartmentById = (payload: any) => {
    return GET_DEPARTMENT_BY_ID({ payload }, payload.successCallback, payload.errorCallback);
  };
  const createDepartment = (payload: any) => {
    return CREATE_DEPARTMENT({ payload }, payload.successCallback, payload.errorCallback);
  };
  const updateDepartment = (payload: any) => {
    return UPDATE_DEPARTMENT({ payload }, payload.successCallback, payload.errorCallback);
  };
  const deleteDepartment = (payload: any) => {
    return DELETE_DEPARTMENT({ payload }, payload.successCallback, payload.errorCallback);
  };
  return { getDepartments, getDepartmentById, createDepartment, updateDepartment, deleteDepartment };
}
