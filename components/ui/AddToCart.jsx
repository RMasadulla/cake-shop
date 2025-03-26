"use client";

import { addToCart, getTotals } from "@/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import ActionBtnCustom from "./ActionBtnCustom";

export default function AddToCart({ item }) {
  const dispatch = useDispatch();

  const handleClick = (recipe) => {
    dispatch(addToCart(recipe));
    dispatch(getTotals());
  };

  return (
    <ActionBtnCustom onClick={() => handleClick(item)}>
      Add to Cart
    </ActionBtnCustom>
  );
}
