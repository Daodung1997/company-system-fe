import Api from "~/utils/api";

const rootPath = "/documents";

// Document APIs
export const UPLOAD_DOCUMENT = (file: File, documentableType?: string, documentableId?: number, successCallback?: Function, errorCallback?: Function) => {
  const url = `${rootPath}/upload`;
  const formData = new FormData();
  formData.append("file", file);
  if (documentableType) {
    formData.append("documentable_type", documentableType);
  }
  if (documentableId !== undefined && documentableId !== null) {
    formData.append("documentable_id", documentableId.toString());
  }

  return Api.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res: any) => successCallback && successCallback(res))
    .catch((err: any) => errorCallback && errorCallback(err));
};

export const ATTACH_DOCUMENT = (data: { document_id: number; documentable_type: string; documentable_id: number }, successCallback?: Function, errorCallback?: Function) => {
  const url = `${rootPath}/attach`;
  return Api.post(url, data)
    .then((res: any) => successCallback && successCallback(res))
    .catch((err: any) => errorCallback && errorCallback(err));
};

export const DELETE_DOCUMENT = (id: number, successCallback?: Function, errorCallback?: Function) => {
  const url = `${rootPath}/${id}`;
  return Api.delete(url)
    .then((res: any) => successCallback && successCallback(res))
    .catch((err: any) => errorCallback && errorCallback(err));
};

export const GET_DOWNLOAD_URL = (id: number): string => {
  const baseUrl = import.meta.env.VITE_APP_API_URL || 'http://localhost/api';
  return `${baseUrl}${rootPath}/${id}/download`;
};

export const GET_DOCUMENTS = (params: any, successCallback?: Function, errorCallback?: Function) => {
  const url = `${rootPath}`;
  return Api.get(url, { params })
    .then((res: any) => successCallback && successCallback(res))
    .catch((err: any) => errorCallback && errorCallback(err));
};
