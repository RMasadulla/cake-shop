import { FaCartShopping } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
export default function Cart() {
  const productCart = 0;

  return productCart ? (
    <FaCartShopping className="w-10 text-2xl cursor-pointer" />
  ) : (
    <LuShoppingCart className="w-10 text-2xl cursor-pointer" />
  );
}
