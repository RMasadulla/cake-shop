"use client";

import { getTotals } from "@/redux/features/cart/cartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function CartProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch]);

  return <>{children}</>;
}
