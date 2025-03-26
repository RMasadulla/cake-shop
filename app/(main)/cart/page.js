"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import ActionBtnCustom from "@/components/ui/ActionBtnCustom";
import {
  addToCart,
  clearCart,
  decreasedCartQty,
  getTotals,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";
import Image from "next/image";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.carts);
  const cart = useSelector((state) => state.carts);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncreasedCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecreasedCart = (item) => {
    dispatch(decreasedCartQty(item));
  };

  return cartItems.length === 0 ? (
    <div className="h-[85vh] flex items-center justify-start mt-10 lg:justify-center flex-col">
      <h1>Your cart is full empty !</h1>
      <ActionBtnCustom onClick={() => router.push("/")}>
        Start Shopping
        <FiShoppingCart />
      </ActionBtnCustom>
    </div>
  ) : (
    <main className=" bg-gray-100 border-b border-gray-900">
      <div className="container mx-auto px-4">
        <div className="customContainer py-8">
          <h1 className="text-3xl font-[600]">Your Cart</h1>
          <div className="full lg:w-2/3 flex justify-between items-center mt-3 mb-1">
            <p className="text-base font-[300]">
              There are {cart.cartTotalQuantity} products in your cart
            </p>
            <button
              onClick={() => dispatch(clearCart())}
              className="flex items-center gap-1 font-[500] text-base lg:mr-6 border-b-transparent hover:border-b-gray-800"
            >
              <RiDeleteBin6Line className="text-lg " />
              Clear Cart
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="w-full lg:w-2/3">
              <div className="overflow-x-auto mt-6">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="py-3 px-4 uppercase font-semibold text-sm text-left">
                        Product
                      </th>
                      <th className="py-3 px-4 uppercase font-semibold text-sm text-center">
                        Unit Price
                      </th>
                      <th className="py-3 px-4 uppercase font-semibold text-sm text-center">
                        Quantity
                      </th>
                      <th className="py-3 px-4 uppercase font-semibold text-sm text-center">
                        Subtotal
                      </th>
                      <th className="py-3 px-4 uppercase font-semibold text-sm text-center">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-4 px-4 flex items-center gap-4">
                          <Image
                            height={1000}
                            width={1000}
                            src={`/thumbs/${item?.thumbnail}`}
                            alt={item?.title}
                            className="w-16 h-16 border rounded-md object-cover"
                          />
                          <span>{item.title}</span>
                        </td>
                        <td className="py-4 px-4 text-center">৳{item.price}</td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center gap-2 border rounded-md">
                            <button
                              onClick={() => handleDecreasedCart(item)}
                              className="font-bold text-lg px-2"
                            >
                              -
                            </button>
                            <span className="px-2">{item.cartQuantity}</span>
                            <button
                              onClick={() => handleIncreasedCart(item)}
                              className="font-bold text-lg px-2"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          ৳{item.price * item.cartQuantity}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button
                            onClick={() => handleRemoveFromCart(item)}
                            className="bg-red-500 text-white px-3 py-1 rounded"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border-t mt-4">
                <button
                  onClick={() => router.push("/")}
                  className="bg-gray-900 text-white flex items-center gap-3 py-2 px-6 rounded-md mt-4"
                >
                  <HiOutlineArrowNarrowLeft /> <span>Continue Shopping</span>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/3 mt-6">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="border">
                  <div className="flex items-center justify-between p-3 border-b">
                    <p className="text-lg font-[600]">Subtotal</p>
                    <p className="text-lg font-[400]">
                      ৳{cart?.cartTotalAmount}
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-3 border-b">
                    <p className="text-lg font-[600]">Shipping</p>
                    <p className="text-lg font-[400]">৳150</p>
                  </div>
                  <div className="flex items-center justify-between p-3 border-b">
                    <p className="text-lg font-[600]">Estimate for</p>
                    <p className="text-lg font-[400]">Bangladesh</p>
                  </div>
                  <div className="flex items-center justify-between p-3 border-b">
                    <p className="text-lg font-[600]">Total</p>
                    <p className="text-lg font-[400]">
                      ৳{cart?.cartTotalAmount + 150}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => router.push("/checkout")}
                  className="w-full bg-gray-900 text-white flex items-center justify-center gap-3 py-2 px-6 rounded-md my-6"
                >
                  Proceed To Checkout <MdOutlineShoppingCartCheckout />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
