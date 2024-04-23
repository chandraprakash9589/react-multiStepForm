import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import productURL from "../../utils.js";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const response = await axios.get(productURL);
      return response.data.products;
    } catch (error) {
      throw Error("Error fetching products");
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    selectedProducts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setSelectedProducts: (state, action) => {
      state.selectedProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSelectedProducts } = productSlice.actions;
export const selectProduct = (state) => state.product;
export default productSlice.reducer;
