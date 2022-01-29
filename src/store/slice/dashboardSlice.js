import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../helpers/axios";

export const getDashboardDetail = createAsyncThunk(
  "getDashboardDetail",
  async (data, thunkAPI) => {
    try {
      console.log("*****");
      const response = await Axios.get("/company/dashboard");
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error.response);
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    dashboard: null,
    error: null,
    loader: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDashboardDetail.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getDashboardDetail.fulfilled, (state, action) => {
      state.loader = false;
      state.dashboard = action.payload;
    });
    builder.addCase(getDashboardDetail.rejected, (state, action) => {
      state.loader = false;
      state.error = action.payload;
    });
  },
});

export default dashboardSlice.reducer;
