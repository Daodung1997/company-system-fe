import { defineStore } from "pinia";
import { PER_PAGE_LIST } from "@/config/constants";
import Api from "~/utils/api";

const defaultState = {
  pageNumber: 1,
  pageLimit: PER_PAGE_LIST[0],
  userInfo: null,
  companySetting: null as any,
};

export const useApiStore = defineStore("apiStore", {
  state: () => ({ 
    ...defaultState,
    activeRequests: 0
  }),
  getters: {
    isLoading: (state) => state.activeRequests > 0
  },
  actions: {
    incrementLoading() {
      this.activeRequests++;
    },
    decrementLoading() {
      if (this.activeRequests > 0) {
        this.activeRequests--;
      }
    },
    setUserInfo(info: any) {
      this.userInfo = info;
    },
    fetchCompanySetting() {
      return Api.get("/master/company-setting")
        .then((res: any) => {
          const data = res?.data?.data || res?.data;
          this.companySetting = data;
          return data;
        })
        .catch(() => {
          // Fallback or ignore
        });
    },
    reset() {
      // @ts-ignore
      Object.assign(this, defaultState);
      this.activeRequests = 0;
    },
  },
});
