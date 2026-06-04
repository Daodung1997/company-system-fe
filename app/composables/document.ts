import {
  UPLOAD_DOCUMENT,
  ATTACH_DOCUMENT,
  DELETE_DOCUMENT,
  GET_DOCUMENTS,
  GET_DOWNLOAD_URL,
} from "~/apis/document";

export function useDocument() {
  const uploadDocument = (payload: any) => {
    const { file, documentableType, documentableId, successCallback, errorCallback } = payload;
    return UPLOAD_DOCUMENT(file, documentableType, documentableId, successCallback, errorCallback);
  };

  const attachDocument = (payload: any) => {
    const { data, successCallback, errorCallback } = payload;
    return ATTACH_DOCUMENT(data, successCallback, errorCallback);
  };

  const deleteDocument = (payload: any) => {
    const { id, successCallback, errorCallback } = payload;
    return DELETE_DOCUMENT(id, successCallback, errorCallback);
  };

  const getDocuments = (payload: any) => {
    const { params, successCallback, errorCallback } = payload;
    return GET_DOCUMENTS(params, successCallback, errorCallback);
  };

  return {
    uploadDocument,
    attachDocument,
    deleteDocument,
    getDocuments,
    getDownloadUrl: GET_DOWNLOAD_URL,
  };
}
