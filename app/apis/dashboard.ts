import Api from "~/utils/api";

// Get dashboard aggregated statistics
export const GET_DASHBOARD_STATS = (params: any, successCallback: Function, errorCallback: Function) => {
  return Api.get("/dashboard", { params }).then(successCallback).catch(errorCallback);
};
