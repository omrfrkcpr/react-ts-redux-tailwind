import axios, { AxiosInstance } from "axios";
import { useAppSelector } from "./useReduxStore";
import { API_BASE_URL } from "../config/constants";

interface AxiosInstances {
  axiosWithPublic: AxiosInstance;
  axiosWithPrivate: AxiosInstance;
}

export const useAxios = (): AxiosInstances => {
  const { user } = useAppSelector((state) => state.auth);

  const axiosWithPublic = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const axiosWithPrivate = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      ...(user?.token && { Authorization: `Bearer ${user.token}` }),
    },
  });

  // Add response interceptor for error handling
  [axiosWithPublic, axiosWithPrivate].forEach((instance) => {
    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Handle unauthorized access
        }
        return Promise.reject(error);
      }
    );
  });

  return { axiosWithPublic, axiosWithPrivate };
};
