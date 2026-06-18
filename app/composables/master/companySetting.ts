import {
  GET_COMPANY_SETTING,
  UPDATE_COMPANY_SETTING,
} from "~/apis/master/companySetting";

export function useCompanySetting() {
  const getCompanySetting = (payload: any) => {
    return GET_COMPANY_SETTING(payload.successCallback, payload.errorCallback);
  };

  const updateCompanySetting = (payload: any) => {
    return UPDATE_COMPANY_SETTING(payload.data, payload.successCallback, payload.errorCallback);
  };

  return { getCompanySetting, updateCompanySetting };
}
