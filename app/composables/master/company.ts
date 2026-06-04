import {
  GET_COMPANIES,
  GET_COMPANY_BY_ID,
  CREATE_COMPANY,
  UPDATE_COMPANY,
  DELETE_COMPANY,
} from "~/apis/master/company";

export function useCompany() {
  const getCompanies = (payload: any) => {
    return GET_COMPANIES({ payload }, payload.successCallback, payload.errorCallback);
  };
  const getCompanyById = (payload: any) => {
    return GET_COMPANY_BY_ID({ payload }, payload.successCallback, payload.errorCallback);
  };
  const createCompany = (payload: any) => {
    return CREATE_COMPANY({ payload }, payload.successCallback, payload.errorCallback);
  };
  const updateCompany = (payload: any) => {
    return UPDATE_COMPANY({ payload }, payload.successCallback, payload.errorCallback);
  };
  const deleteCompany = (payload: any) => {
    return DELETE_COMPANY({ payload }, payload.successCallback, payload.errorCallback);
  };
  return { getCompanies, getCompanyById, createCompany, updateCompany, deleteCompany };
}
