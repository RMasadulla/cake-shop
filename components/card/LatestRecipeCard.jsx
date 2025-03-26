import { getCategoryNameById } from "@/utils/getCategoryNameById";
import titleReplace from "@/utils/titleReplace";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../ui/AddToCart";
export default function LatestRecipeCard({ recipe, categories }) {
  const categroy = categories.find((cat) => cat.id === recipe?.category_id);

  return (
    <div>
      <Link
        href={`/${getCategoryNameById(recipe?.category_id)}/${titleReplace(
          recipe?.title
        )}`}
      >
        <Image
          src={`/thumbs/${recipe?.thumbnail}`}
          alt={recipe?.title}
          className="w-full h-[300px] object-cover rounded-lg mb-4"
          width={1674}
          height={1256}
        />
        <h3 className="text-lg font-semibold mb-2">{recipe?.title}</h3>
      </Link>
      <div className="flex items-center justify-between">
        <p className="text-gray-600">Tk.{recipe?.price}</p>
        <AddToCart item={recipe} />
      </div>
    </div>
  );
}
