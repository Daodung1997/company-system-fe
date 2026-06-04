import Api from "~/utils/api";

export const CHECK_IN = (successCallback: Function, errorCallback: Function) => {
  return Api.post("/timesheets/check-in", {}).then(successCallback).catch(errorCallback);
};

export const CHECK_OUT = (successCallback: Function, errorCallback: Function) => {
  return Api.post("/timesheets/check-out", {}).then(successCallback).catch(errorCallback);
};

export const GET_MONTHLY_TIMESHEETS = (params: { year_month: string }, successCallback: Function, errorCallback: Function) => {
  return Api.get("/timesheets/monthly", { params }).then(successCallback).catch(errorCallback);
};

export const CREATE_LEAVE_REQUEST = (data: any, successCallback: Function, errorCallback: Function) => {
  return Api.post("/leave-requests", data).then(successCallback).catch(errorCallback);
};

export const GET_MY_LEAVE_REQUESTS = (successCallback: Function, errorCallback: Function) => {
  return Api.get("/leave-requests").then(successCallback).catch(errorCallback);
};

export const GET_PENDING_LEAVE_REQUESTS = (successCallback: Function, errorCallback: Function) => {
  return Api.get("/leave-requests/pending").then(successCallback).catch(errorCallback);
};

export const APPROVE_LEAVE_REQUEST = (id: number, data: { status: string; approver_note?: string }, successCallback: Function, errorCallback: Function) => {
  return Api.post(`/leave-requests/${id}/approve`, data).then(successCallback).catch(errorCallback);
};

export const GET_ADMIN_TIMESHEETS = (params: any, successCallback: Function, errorCallback: Function) => {
  return Api.get("/timesheets/manage", { params }).then(successCallback).catch(errorCallback);
};

export const GET_TIMESHEET_STATISTICS = (params: any, successCallback: Function, errorCallback: Function) => {
  return Api.get("/timesheets/statistics", { params }).then(successCallback).catch(errorCallback);
};

export const STORE_MANUAL_TIMESHEET = (data: any, successCallback: Function, errorCallback: Function) => {
  return Api.post("/timesheets/store-manual", data).then(successCallback).catch(errorCallback);
};

export const GET_WORKING_HOUR_CONFIGS = (successCallback: Function, errorCallback: Function) => {
  return Api.get("/timesheets/working-hour-configs").then(successCallback).catch(errorCallback);
};

export const STORE_WORKING_HOUR_CONFIG = (data: any, successCallback: Function, errorCallback: Function) => {
  return Api.post("/timesheets/working-hour-configs", data).then(successCallback).catch(errorCallback);
};

export const DELETE_WORKING_HOUR_CONFIG = (id: number, successCallback: Function, errorCallback: Function) => {
  return Api.delete(`/timesheets/working-hour-configs/${id}`).then(successCallback).catch(errorCallback);
};

export const GET_SHIFTS = (successCallback: Function, errorCallback: Function) => {
  return Api.get("/timesheets/shifts").then(successCallback).catch(errorCallback);
};

export const STORE_SHIFT = (data: any, successCallback: Function, errorCallback: Function) => {
  return Api.post("/timesheets/shifts", data).then(successCallback).catch(errorCallback);
};

export const DELETE_SHIFT = (id: number, successCallback: Function, errorCallback: Function) => {
  return Api.delete(`/timesheets/shifts/${id}`).then(successCallback).catch(errorCallback);
};

export const GET_EMPLOYEE_SHIFTS = (params: any, successCallback: Function, errorCallback: Function) => {
  return Api.get("/timesheets/employee-shifts", { params }).then(successCallback).catch(errorCallback);
};

export const STORE_EMPLOYEE_SHIFT = (data: any, successCallback: Function, errorCallback: Function) => {
  return Api.post("/timesheets/employee-shifts", data).then(successCallback).catch(errorCallback);
};

export const DELETE_EMPLOYEE_SHIFT = (id: number, successCallback: Function, errorCallback: Function) => {
  return Api.delete(`/timesheets/employee-shifts/${id}`).then(successCallback).catch(errorCallback);
};

export const GET_EMPLOYEE_SHIFTS_CALENDAR = (params: any, successCallback: Function, errorCallback: Function) => {
  return Api.get("/timesheets/employee-shifts/calendar", { params }).then(successCallback).catch(errorCallback);
};

export const RESET_EMPLOYEE_SHIFTS = (data: any, successCallback: Function, errorCallback: Function) => {
  return Api.post("/timesheets/employee-shifts/reset", data).then(successCallback).catch(errorCallback);
};

export const GET_PAYROLL = (params: any, successCallback: Function, errorCallback: Function) => {
  return Api.get("/timesheets/payroll", { params }).then(successCallback).catch(errorCallback);
};

export const SAVE_PAYROLL = (data: any, successCallback: Function, errorCallback: Function) => {
  return Api.post("/timesheets/payroll", data).then(successCallback).catch(errorCallback);
};

export const EXPORT_PAYROLL_EXCEL = (params: any) => {
  return Api.get("/timesheets/payroll/export-excel", { params, responseType: 'blob' });
};

export const EXPORT_PAYROLL_PDF = (params: any) => {
  return Api.get("/timesheets/payroll/export-pdf", { params, responseType: 'blob' });
};


