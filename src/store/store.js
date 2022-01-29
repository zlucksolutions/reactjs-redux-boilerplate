import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import dashboardSlice from "./slice/dashboardSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
