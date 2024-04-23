// store.js
import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./reducers/personalInfoSlice.js";
import productReducer from "./reducers/productSlice.js";

const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    product: productReducer,
  },
});
export default store;
