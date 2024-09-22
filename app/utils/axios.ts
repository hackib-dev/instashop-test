import Axios, { AxiosInstance } from "axios";
import { API_BASE_URL, sessionStorageName } from "../config";
import { Product } from "@/types.ts";

const axiosInstance: AxiosInstance = Axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000, // 1 minutes
});

const axios = (url?: string, refreshToken?: string) => {
  if (refreshToken) {
    axiosInstance.defaults.headers.Authorization = refreshToken;
  }
  if (url) {
    axiosInstance.defaults.baseURL = `${API_BASE_URL}${url}`;
  }

  return axiosInstance;
};

axiosInstance.interceptors.request.use(
  (config: any) => {
    let storedSession;
    if (typeof window !== "undefined") {
      storedSession = sessionStorage.getItem(sessionStorageName);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const AxiosObject = axiosInstance;

export default axios;
