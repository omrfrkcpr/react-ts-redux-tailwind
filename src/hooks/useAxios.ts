import axios from "axios";

export const useAxios = (baseURL: string) => {
  const axiosWithPublic = axios.create({
    baseURL,
    timeout: 8000,
  });

  return { axiosWithPublic };
};
