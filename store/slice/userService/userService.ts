/* eslint-disable no-param-reassign */

"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types.ts";

let sessionStorageState;
if (typeof window !== "undefined") {
  sessionStorageState = sessionStorage.getItem("userEmail");
}

interface UserState {
  user: Partial<User>;
}

const initialState: UserState = sessionStorageState
  ? {
      user: { ...JSON.parse(sessionStorageState) },
    }
  : {
      user: {
        email: "",
      },
    };

const userServiceSlice = createSlice({
  name: "userService",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<User>>) => {
      state.user = {
        ...action.payload,
      };
      sessionStorage.setItem("userEmail", JSON.stringify(action.payload));
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state?.user) {
        state.user = { ...state.user, ...action.payload };
        sessionStorage.setItem("userEmail", JSON.stringify(state.user));
      }
    },
  },
});

export const { setUser, updateUser } = userServiceSlice.actions;

export default userServiceSlice.reducer;
