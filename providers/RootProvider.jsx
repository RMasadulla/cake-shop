"use client";

import store from "@/redux/app/store";
import { getTotals } from "@/redux/features/cart/cartSlice";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

function CartInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch]);

  return null; // This component only handles the setup
}

export default function RootProvider({ children }) {
  return (
    <Provider store={store}>
      <CartInitializer />
      {children}
      <ToastContainer />
    </Provider>
  );
}
