import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { routes } from "../../constants";
import Axios, { authHeaders } from "../../helpers/axios";
//Action

//getUserList
export const getUserList = createAsyncThunk(
  "getUserList",
  async (data, thunkAPI) => {
    try {
      let url;
      url = `/users/get?phone_number=${data.mobileNum || ""}&user_type=${
        data.userType || ""
      }&user_status=${data.userStatus || ""}`;
      const response = await Axios.get(url, authHeaders());
      console.log("getUserResponse", response.data);
      if (data.callBack) {
        return data.cb(response.data);
      }

      return response.data;
    } catch (error) {
      console.log("getUserError", error.response);
      data.cb(null, error);
    }
  }
);
//getUserById
export const getUserById = createAsyncThunk("getUserById", async (id) => {
  try {
    const response = await Axios.get(
      `/users/get/user-detail/${id}`,
      authHeaders()
    );
    console.log("getListId", response.data);
    return response.data;
  } catch (error) {
    console.log("err", error.response);
  }
});
//sendOtp
export const sendOtp = createAsyncThunk("sendOtp", async (data, thunkAPI) => {
  console.log("data", data);
  try {
    const response = await Axios.post("/users/send-otp", data);
    console.log("sendOtp", response);
    return response.config.data;
  } catch (error) {
    console.log("error", error.response);
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});
//verifyOtp
export const verifyOtp = createAsyncThunk(
  "verifyOtp",
  async (data, thunkAPI) => {
    console.log("data", data);
    try {
      const response = await Axios.post("/users/verify-otp", data);
      console.log("verifyOtp", response);
      if (response.status === 200) {
        toast.success("OTP Verified !", {
          autoClose: 2000,
        });
      }
      return response.data;
    } catch (error) {
      console.log("error", error.response);
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);
//registerUser
export const registerUser = createAsyncThunk(
  "registerUser",
  async (data, thunkAPI) => {
    try {
      const response = await Axios.post("/users/register", data.data);
      console.log("registerUser", response);
      if (response.status === 200) {
        toast.success("Create User Successfully !", {
          autoClose: 3000,
        });
        return data.cb(response.data);
      }
      return response.data;
    } catch (error) {
      console.log("ERROR", error.response);
      return data.cb(null, error);
    }
  }
);
//verifyUser
export const verifyUser = createAsyncThunk(
  "verifyUser",
  async (data, thunkAPI) => {
    try {
      const response = await Axios.post(
        "/users/verify-user",
        data.data,
        authHeaders()
      );
      if (response.status === 200) {
        toast.success("User Verified !", {
          autoClose: 2000,
        });
        data.navigate(routes.customerProperty);
      }
      return response.data;
    } catch (error) {
      console.log("err", error.response);
    }
  }
);

//createSlice
const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  userById: null,
  users: [],
  registerUser: null,
  sendOtp: null,
  otp: null,
  loader: false,
  error: "",
  user: initialUser,
  verifyUser: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },

  extraReducers: (builder) => {
    //sendOtp
    builder.addCase(sendOtp.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(sendOtp.fulfilled, (state, action) => {
      state.loader = false;
      state.sendOtp = action.payload;
    });
    builder.addCase(sendOtp.rejected, (state, action) => {
      state.loader = false;
      state.error = action.payload;
    });
    // verifyOtp
    builder.addCase(verifyOtp.pending, (state, action) => {
      state.loader = false;
      state.error = action.payload;
    });
    builder.addCase(verifyOtp.fulfilled, (state, action) => {
      state.loader = false;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(verifyOtp.rejected, (state, action) => {
      state.loader = false;
      state.error = action.payload;
    });
    //getUserList
    builder.addCase(getUserList.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getUserList.fulfilled, (state, action) => {
      state.loader = false;
      state.users = action.payload;
    });
    builder.addCase(getUserList.rejected, (state, action) => {
      state.loader = false;
      state.error = action.payload;
    });
    //getUserListById
    builder.addCase(getUserById.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.loader = false;
      state.userById = action.payload;
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.loader = false;
      state.error = action.payload;
    });
    //registerUser
    builder.addCase(registerUser.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loader = false;
      state.registerUser = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loader = false;
      state.error = action.payload;
    });
    //verifyUser
    builder.addCase(verifyUser.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(verifyUser.fulfilled, (state, action) => {
      state.loader = false;
      state.verifyUser = action.payload;
    });
    builder.addCase(verifyUser.rejected, (state, action) => {
      state.loader = false;
      state.error = action.payload;
    });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
