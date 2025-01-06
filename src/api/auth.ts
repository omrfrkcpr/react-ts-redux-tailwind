import { useAxios } from "../hooks/useAxios";
import { AuthState, Credentials } from "../types/auth";

export const login = async (credentials: Credentials): Promise<AuthState> => {
  const { axiosWithPublic } = useAxios();
  const { data } = await axiosWithPublic.post<AuthState>(
    "/api/login",
    credentials
  );
  return data;
};
