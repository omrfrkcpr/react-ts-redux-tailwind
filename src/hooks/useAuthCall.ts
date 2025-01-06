import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "./useReduxStore";
import { loginSuccess } from "../redux/slices/authSlice";
import { login } from "../api/auth";
import { Credentials, AuthState } from "../types/auth";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  // login fonksiyonunu ilk argüman olarak veriyoruz.
  const mutation = useMutation<AuthState, Error, Credentials>({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.user) {
        const { email, token } = data.user;
        dispatch(loginSuccess({ email, token }));
      } else {
        console.error("No user data returned.");
      }
    },
  });

  return mutation;
};
