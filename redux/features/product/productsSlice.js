import useData from "@/hooks/useData";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const { recipesData, categoriesData } = useData();

const initialState = {
  products: recipesData,
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchProduct = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const product = await recipesData();
    return product;
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default ProductsSlice.reducer;
