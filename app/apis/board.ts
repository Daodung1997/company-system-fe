import Api from "~/utils/api";

const rootPath = "/posts";

// Get list of posts
export const GET_POSTS = (params: any, successCallback: Function, errorCallback: Function) => {
  return Api.get(rootPath, { params }).then(successCallback).catch(errorCallback);
};

// Get single post details
export const GET_POST_DETAIL = (id: number, successCallback: Function, errorCallback: Function) => {
  return Api.get(`${rootPath}/${id}`).then(successCallback).catch(errorCallback);
};

// Create a new post
export const CREATE_POST = (data: FormData, successCallback: Function, errorCallback: Function) => {
  return Api.post(rootPath, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(successCallback).catch(errorCallback);
};

// Update an existing post
export const UPDATE_POST = (id: number, data: FormData, successCallback: Function, errorCallback: Function) => {
  return Api.post(`${rootPath}/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(successCallback).catch(errorCallback);
};

// Delete a post
export const DELETE_POST = (id: number, successCallback: Function, errorCallback: Function) => {
  return Api.delete(`${rootPath}/${id}`).then(successCallback).catch(errorCallback);
};

// Toggle like status on a post
export const TOGGLE_LIKE_POST = (id: number, successCallback: Function, errorCallback: Function) => {
  return Api.post(`${rootPath}/${id}/like`).then(successCallback).catch(errorCallback);
};

// Add comment to a post
export const ADD_COMMENT = (id: number, data: { content: string }, successCallback: Function, errorCallback: Function) => {
  return Api.post(`${rootPath}/${id}/comment`, data).then(successCallback).catch(errorCallback);
};

// Delete a comment
export const DELETE_COMMENT = (commentId: number, successCallback: Function, errorCallback: Function) => {
  return Api.delete(`/comments/${commentId}`).then(successCallback).catch(errorCallback);
};
