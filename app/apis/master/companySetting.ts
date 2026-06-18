import Api from "~/utils/api";

const rootPath = "/master/company-setting";

export const GET_COMPANY_SETTING = (successCallback: Function, errorCallback: Function) => {
  return Api.get(rootPath).then(successCallback).catch(errorCallback);
};

export const UPDATE_COMPANY_SETTING = (data: any, successCallback: Function, errorCallback: Function) => {
  return Api.post(rootPath, data).then(successCallback).catch(errorCallback);
};
