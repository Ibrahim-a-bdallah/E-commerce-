import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("https://dummyjson.com/products");
      return response.data.products;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch products"
      );
    }
  }
);
export default actGetProducts;
