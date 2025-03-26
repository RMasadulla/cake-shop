"use client";

import Image from "next/image";

import { addToCart, getTotals } from "@/redux/features/cart/cartSlice";
import { getCategoryNameById } from "@/utils/getCategoryNameById";
import titleReplace from "@/utils/titleReplace";
import Link from "next/link";
import { useDispatch } from "react-redux";
import ActionBtnCustom from "../ui/ActionBtnCustom";
import Ratings from "../ui/Ratings";

export default function RelatedProductCard({ recipe }) {
  const dispatch = useDispatch();

  const handleClick = (recipe) => {
    dispatch(addToCart(recipe));
    dispatch(getTotals());
  };

  return (
    <div
      key={recipe?.title}
      className="border rounded-lg overflow-hidden group"
    >
      <Link
        href={`/${getCategoryNameById(recipe?.category_id)}/${titleReplace(
          recipe?.title
        )}`}
      >
        <div className="relative overflow-hidden">
          <Image
            src={`/thumbs/${recipe?.thumbnail}`}
            alt={recipe?.title}
            width={300}
            height={300}
            className="w-full h-64 object-fill transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-2">
          <h3 className="font-medium mb-4">{recipe?.title}</h3>
          <div className="flex items-center">
            <Ratings rating={recipe?.rating?.average_rating} />
            <span className="ml-1 text-xs text-muted-foreground">
              {recipe?.rating?.average_rating}
            </span>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between p-2">
        <div className="font-bold">Tk.{recipe?.price}</div>
        <ActionBtnCustom onClick={() => handleClick(recipe)}>
          Add
        </ActionBtnCustom>
      </div>
    </div>
  );
}
