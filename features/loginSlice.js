import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "false",
};

export const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.value = "true";
    },

    logout: (state) => {
      state.value = "false";
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
