const appName = (import.meta.env.VITE_APP_NAME || "BaseVite").replace(/\s+/g, '');
export const APP_TOKEN_NAME = `${appName}_token`;
export const PER_PAGE_LIST = [10, 20, 30, 50, 100];

export const FORMAT_DATE_SHOW_FULL = "yyyy年MM月DD日 HH:mm:ss";
export const FORMAT_DATE_SHOW = "yyyy年MM月DD日";
export const YEAR_SHOW = "yyyy年";
export const MONTH_SHOW = "MM月";
export const MONTH_VALUE = "M";
export const YEAR_VALUE = "yyyy";
export const FORMAT_DATE_VALUE = "yyyy-MM-DD";
export const FORMAT_DATE_VALUE_FULL = "yyyy-MM-DD HH:mm:ss";

export const ASC = "asc";
export const DESC = "desc";
export const DEFAULT = "";
export const CONFIRM_POPUP = "popup";
export const CONFIRM_DIALOG = "dialog";
export const FIELD_CLEAR = ["createdBy", "updatedBy"];
