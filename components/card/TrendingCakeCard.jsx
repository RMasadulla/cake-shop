import { getCategoryNameById } from "@/utils/getCategoryNameById";
import { getRating } from "@/utils/getRating";
import titleReplace from "@/utils/titleReplace";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../ui/AddToCart";

export default function TrendingCakeCard({ recipe }) {
  return (
    <div>
      <Link
        href={`/${getCategoryNameById(recipe?.category_id)}/${titleReplace(
          recipe?.title
        )}`}
      >
        <Image
          src={`/thumbs/${recipe?.thumbnail}`}
          alt="Chicken Meatball with Creamy Cheese"
          className="w-full h-[300px] object-cover rounded-lg mb-4"
          width={1926}
          height={1540}
        />
        <h3 className="text-xl font-semibold mb-2">{recipe?.title}</h3>
        <div
          className="flex items-center text-yellow-500 mb-2"
          dangerouslySetInnerHTML={{
            __html: getRating(recipe?.rating?.average_rating),
          }}
        />
      </Link>
      <div className="flex items-center justify-between">
        <p className="text-gray-600 capitalize">Tk.{recipe?.price}</p>
        <AddToCart item={recipe} />
      </div>
    </div>
  );
}
