import { combineReducers } from "@reduxjs/toolkit";
import globalStateReducer from "./slice/globalState/globalStateSlice";
import productServiceReducer from "./slice/productService/productService";

const rootReducer = combineReducers({
  globalState: globalStateReducer,
  productService: productServiceReducer,
});

export default rootReducer;
