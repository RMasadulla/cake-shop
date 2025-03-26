"use client";

import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";

export default function Cart() {
  const { cartTotalQuantity } = useSelector((state) => state.carts);

  return cartTotalQuantity ? (
    <Link href="/cart" className="inline-block relative">
      <FaCartShopping className="w-10 text-2xl cursor-pointer" />
      <span
        className={`flex justify-center items-center p-1 ${
          cartTotalQuantity >= 1 ? "bg-gray-900 " : ""
        } text-white rounded-full shadow-2xl text-sm absolute -top-3 left-7 w-7 h-7`}
      >
        {cartTotalQuantity >= 1 ? cartTotalQuantity : ""}
      </span>
    </Link>
  ) : (
    <Link href="/cart">
      <LuShoppingCart className="w-10 text-2xl cursor-pointer" />
    </Link>
  );
}
