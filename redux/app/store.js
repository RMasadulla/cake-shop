import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/product/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartReducer,
  },
});

export default store;
