"use client";

import {
  addToCart,
  decreasedCartQty,
  getTotals,
} from "@/redux/features/cart/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CartQty({ item }) {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.carts);
  const cart = useSelector((state) => state.carts);

  const matchItem = cartItems.find((cartItem) => cartItem.id === item.id);

  const handleIncreasedCart = () => {
    dispatch(addToCart(item));
  };

  const handleDecreasedCart = () => {
    dispatch(decreasedCartQty(item));
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div className="flex items-center justify-center gap-2 border rounded-md">
      <button
        onClick={handleDecreasedCart}
        className="font-bold text-lg px-2"
        disabled={!matchItem || matchItem.cartQuantity <= 1}
      >
        -
      </button>
      <span className="px-2">{matchItem ? matchItem.cartQuantity : 0}</span>
      <button onClick={handleIncreasedCart} className="font-bold text-lg px-2">
        +
      </button>
    </div>
  );
}
