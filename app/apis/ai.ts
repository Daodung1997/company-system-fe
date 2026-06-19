import Api from "~/utils/api";

/**
 * AI OCR File analysis (supports mode: employee, contract, transaction, post)
 */
export const ANALYZE_FILE_OCR = (data: FormData, successCallback: Function, errorCallback: Function) => {
  return Api.post('/ai/ocr', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(successCallback).catch(errorCallback);
};

/**
 * AI Unstructured Text analysis (supports mode: department, post)
 */
export const ANALYZE_TEXT = (data: { text: string; mode: string }, successCallback: Function, errorCallback: Function) => {
  return Api.post('/ai/analyze-text', data).then(successCallback).catch(errorCallback);
};
