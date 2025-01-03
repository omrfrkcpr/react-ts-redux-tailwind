import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAxios } from "../../hooks/useAxios";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }) => {
    const { axiosWithPublic } = useAxios();
    const response = await axiosWithPublic.post("/login", credentials);
    return response.data;
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData: { name: string; email: string; password: string }) => {
    const { axiosWithPublic } = useAxios();
    const response = await axiosWithPublic.post("/register", userData);
    return response.data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const { axiosWithPrivate } = useAxios();
  const response = await axiosWithPrivate.post("/logout");
  return response.data;
});

export interface AuthProps {
  user: { name: string; email: string; token: string } | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null | undefined;
}

const initialState: AuthProps = {
  user: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = "succeeded";
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
