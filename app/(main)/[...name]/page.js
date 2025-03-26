"use client";

import useData from "@/hooks/useData";
import titleReplace from "@/utils/titleReplace";

import { ChevronRight } from "lucide-react";

import RelatedProductCard from "@/components/card/RelatedProductCard";
import ReviewSection from "@/components/ReviewSection";
import ProdcutDetails from "@/components/section/ProdcutDetails";
import Link from "next/link";

export default function DetailsPage({ params: { name } }) {
  const { recipesData, categoriesData } = useData();

  const details = recipesData.find(
    (recipe) => titleReplace(recipe?.title) === name[1]
  );

  const [time, unit] = details?.cooking_time.split(" ") || [];

  const categoryId = categoriesData.find(
    (category) => category?.name === name[0]
  )?.id;

  const CategoryBasedRecipe = recipesData.filter(
    (recipe) => recipe?.category_id === categoryId
  );

  return (
    <main className="container mx-auto px-4 mt-6">
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link
          href={`/${details?.category_id}/recipes`}
          className="hover:text-primary"
        >
          {name[0]}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground">{details?.title}</span>
      </div>
      <ProdcutDetails details={details} />
      {/* Review Section */}

      <div className="flex  lg:flex-row flex-col-reverse gap-6">
        {/* Related Products */}
        <section className="">
          <h2 className="text-3xl font-bold mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {CategoryBasedRecipe &&
              CategoryBasedRecipe.sort(
                (a, b) => b.rating.rating_count - a.rating.rating_count
              )
                .slice(0, 3)
                .map((recipe) => {
                  return (
                    <RelatedProductCard key={recipe?.title} recipe={recipe} />
                  );
                })}
          </div>
        </section>
        <ReviewSection details={details?.rating} productId="chocolate-cake" />
      </div>
    </main>
  );
}
