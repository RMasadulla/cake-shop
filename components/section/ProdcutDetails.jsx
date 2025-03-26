"use client";

import { removeFromCart } from "@/redux/features/cart/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductGallery from "../product/ProductGallery";
import AddToCart from "../ui/AddToCart";
import CartQty from "../ui/CartQty";
import Ratings from "../ui/Ratings";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProdcutDetails({ details }) {
  const dispatch = useDispatch();
  const [activeImage, setActiveImage] = useState(0);

  const { cartItems } = useSelector((state) => state.carts);

  const matchItem = cartItems.find((cartItem) => cartItem.id === details.id);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  //   console.log(matchItem && matchItem?.cartQuantity >= 1);

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <ProductGallery details={details} />
      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{details?.title}</h1>
          <div className="flex items-center mt-2">
            <Ratings rating={details?.rating?.average_rating} />

            <span className="ml-2 text-sm text-muted-foreground">
              {details?.rating?.average_rating} ({details?.rating?.rating_count}
              reviews)
            </span>
          </div>
        </div>

        <div className="text-3xl font-bold">Tk.{details?.price}</div>

        <p className="text-muted-foreground">{details?.description}</p>

        <hr />

        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-medium mr-4">Quantity:</span>
            <CartQty item={details} />
          </div>

          <div className="flex flex-wrap gap-4">
            {matchItem?.cartQuantity >= 1 ? (
              <button
                onClick={() => handleRemoveFromCart(details)}
                className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600"
              >
                Remove from Cart
              </button>
            ) : (
              <AddToCart item={details} />
            )}

            <button>Add to Wishlist</button>
          </div>
        </div>

        <hr />

        {/* <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-4">
            <p>{product.description}</p>
            <p className="mt-4">
              This cake is made with the finest ingredients and baked fresh to
              order. It's perfect for any celebration or special occasion.
            </p>
          </TabsContent>
          <TabsContent value="ingredients" className="pt-4">
            <p className="font-medium">Ingredients:</p>
            <p className="mt-2">{product.details.ingredients}</p>
            <p className="mt-4 font-medium">Allergens:</p>
            <p className="mt-2">{product.details.allergens}</p>
          </TabsContent>
          <TabsContent value="details" className="pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Weight:</p>
                <p>{product.details.weight}</p>
              </div>
              <div>
                <p className="font-medium">Serves:</p>
                <p>{product.details.serves}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs> */}
      </div>
    </div>
  );
}
