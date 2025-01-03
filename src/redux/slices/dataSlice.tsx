import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../hooks/useApiCall";

export const fetchData = createAsyncThunk("data/fetchData", fetchApi);
export interface DataProps {
  items: [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
}

const initialState = {
  items: [],
  status: "idle",
  error: null,
} as DataProps;

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
