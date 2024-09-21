/* eslint-disable no-param-reassign */

"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sessionStorageName } from "@/app/config";
import { Product } from "@/types.ts";

let sessionStorageState;
if (typeof window !== "undefined") {
  sessionStorageState = sessionStorage.getItem(sessionStorageName);
}

interface ProductState {
  product: Partial<Product>;
}

const initialState: ProductState = sessionStorageState
  ? {
      product: { ...JSON.parse(sessionStorageState) },
    }
  : {
      product: {
        isAuthenticated: false,
      },
    };

const productServiceSlice = createSlice({
  name: "productService",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Partial<Product>>) => {
      state.product = {
        ...action.payload,
      };
      sessionStorage.setItem(
        sessionStorageName,
        JSON.stringify(action.payload)
      );
    },
    updateProduct: (state, action: PayloadAction<Partial<Product>>) => {
      if (state?.product) {
        state.product = { ...state.product, ...action.payload };
        sessionStorage.setItem(
          sessionStorageName,
          JSON.stringify(state.product)
        );
      }
    },
  },
});

export const { setProduct, updateProduct } = productServiceSlice.actions;

export default productServiceSlice.reducer;
