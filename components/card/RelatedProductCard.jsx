import { Star } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { getCategoryNameById } from "@/utils/getCategoryNameById";
import titleReplace from "@/utils/titleReplace";
import Link from "next/link";

export default function RelatedProductCard({
  recipe,
  price = 39.99,
  rating = 4.5,
}) {
  return (
    <Link
      key={recipe?.title}
      href={`/${getCategoryNameById(recipe?.category_id)}/${titleReplace(
        recipe?.title
      )}`}
      className="border rounded-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <Image
          src={`/thumbs/${recipe?.thumbnail}`}
          alt={recipe?.title}
          width={300}
          height={300}
          className="w-full h-64 object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="font-medium">{recipe?.title}</h3>

        <div className="flex items-center mt-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-primary text-primary"
                    : "fill-muted text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="ml-1 text-xs text-muted-foreground">{rating}</span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="font-bold">${price.toFixed(2)}</div>
          <Button variant="outline" size="sm">
            View
          </Button>
        </div>
      </div>
    </Link>
  );
}
