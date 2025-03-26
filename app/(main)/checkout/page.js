"use client";

import ActionBtnCustom from "@/components/ui/ActionBtnCustom";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const CheckoutPage = () => {
  const { cartItems } = useSelector((state) => state.carts);
  const cart = useSelector((state) => state.carts);

  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p className="text-base font-[300]">
          There are {cart.cartTotalQuantity} products in your cart
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Details Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          <form className="bg-white p-6 rounded-lg shadow-md border">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Phone *
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Email address *
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                Address *
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                Address line 2
              </label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                City / Town *
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                Postcode / ZIP *
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                Additional information
              </label>
              <textarea className="w-full p-2 border rounded"></textarea>
            </div>
            <div className="mt-10">
              <h3 className="text-lg lg:text-3xl font-semibold mb-4">
                Payment
              </h3>
              <div className="space-y-2 mb-3">
                <label className="flex items-center">
                  <input type="radio" name="payment" className="mr-2" />
                  Direct Bank Transfer
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment" className="mr-2" />
                  Cash on Delivery
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment" className="mr-2" />
                  Online Gateway
                </label>
              </div>
            </div>
            <ActionBtnCustom>
              Place an Order <FaArrowRightFromBracket />
            </ActionBtnCustom>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="w-full mt-6">
          <div className="bg-white border rounded-lg p-8 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-3xl font-semibold mb-4">
                Your Order
              </h2>
              <p className="text-lg font-[600]">Subtotal</p>
            </div>
            {cartItems &&
              cartItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="border flex items-center gap-4 p-4"
                  >
                    <div className="w-40 h-auto rounded-md border p-3">
                      <Image
                        src={`/thumbs/${item?.thumbnail}`}
                        alt={item?.title}
                        height={1000}
                        width={1000}
                        className="w-full rounded-md object-cover "
                      />
                    </div>

                    <p className="flex-1">{item.title}</p>
                    <p className="text-end">
                      ৳{item.price * item.cartQuantity}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
