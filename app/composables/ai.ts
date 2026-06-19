import { ANALYZE_FILE_OCR, ANALYZE_TEXT } from "~/apis/ai";

export function useAi() {
  const analyzeFileOcr = (payload: any) => {
    const { data, successCallback, errorCallback } = payload;
    return ANALYZE_FILE_OCR(data, successCallback, errorCallback);
  };

  const analyzeText = (payload: any) => {
    const { data, successCallback, errorCallback } = payload;
    return ANALYZE_TEXT(data, successCallback, errorCallback);
  };

  return {
    analyzeFileOcr,
    analyzeText,
  };
}
