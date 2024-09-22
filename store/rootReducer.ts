import { combineReducers } from "@reduxjs/toolkit";
import productServiceReducer from "./slice/productService/productService";
import userServiceReducer from "./slice/userService/userService";

const rootReducer = combineReducers({
  userState: userServiceReducer,
  productService: productServiceReducer,
});

export default rootReducer;
