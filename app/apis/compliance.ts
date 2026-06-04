import Api from "~/utils/api";

const rootPath = "/compliance";

// Get list of issues
export const GET_COMPLIANCE_ISSUES = (params: any, successCallback: Function, errorCallback: Function) => {
  const url = rootPath;
  return Api.get(url, { params }).then(successCallback).catch(errorCallback);
};

// Trigger manual compliance scan
export const SCAN_COMPLIANCE = (successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/scan`;
  return Api.post(url).then(successCallback).catch(errorCallback);
};

// Resolve an issue manually
export const RESOLVE_COMPLIANCE_ISSUE = (id: number, note: string, successCallback: Function, errorCallback: Function) => {
  const url = `${rootPath}/${id}/resolve`;
  return Api.put(url, { note }).then(successCallback).catch(errorCallback);
};
