import { defineStore } from "pinia";
import { PER_PAGE_LIST } from "@/config/constants";

const defaultState = {
  pageNumber: 1,
  pageLimit: PER_PAGE_LIST[0],
  userInfo: null,
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
    reset() {
      // @ts-ignore
      Object.assign(this, defaultState);
      this.activeRequests = 0;
    },
  },
});
