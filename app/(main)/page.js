import Image from "next/image";

import HandPickedCollectionCard from "@/components/card/HandPickedCollectionCard";
import LatestRecipeCard from "@/components/card/LatestRecipeCard";
import TrendingCakeCard from "@/components/card/TrendingCakeCard";
import WeeklyRecipeDeliveryForm from "@/components/form/WeeklyRecipeDeliveryForm";
import CagegorySlider from "@/components/slider/CagegorySlider";
import BtnCustom from "@/components/ui/BtnCustom";
import useData from "@/hooks/useData";
import { getCategoryNameById } from "@/utils/getCategoryNameById";
import titleReplace from "@/utils/titleReplace";
import Link from "next/link";

export default function Home() {
  const { recipesData, categoriesData } = useData();
  const randomRecipe =
    recipesData[Math.floor(Math.random() * recipesData.length)];

  const sortedRecipes =
    recipesData &&
    [...recipesData].sort(
      (a, b) => b.rating.rating_count - a.rating.rating_count
    );

  const popularCategory = categoriesData.map((category) => {
    const recipeCount = recipesData.filter(
      (recipe) => recipe?.category_id === category.id
    ).length;
    return {
      category,
      recipeCount,
    };
  });

  return (
    <main className="container mx-auto px-4 mt-10">
      <section className="mb-16 bg-orange-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src={`/thumbs/${randomRecipe?.thumbnail}`}
              alt={randomRecipe?.title}
              className="w-full h-[450px] object-cover rounded-lg"
              width={1368}
              height={768}
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{randomRecipe?.title}</h1>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {randomRecipe?.description}
            </p>
            <BtnCustom
              href={`/${getCategoryNameById(
                randomRecipe?.category_id
              )}/${titleReplace(randomRecipe?.title)}`}
            >
              View Details
            </BtnCustom>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex justify-between items-top">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <Link href="/categories" className="text-gray-600">
            View All
          </Link>
        </div>
        <CagegorySlider popularCategory={popularCategory} />
      </section>

      <section id="trending-Cakes" className="mb-16 lg:pt-20">
        <h2 className="text-3xl font-bold mb-8">Trending Cakes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {sortedRecipes &&
            sortedRecipes
              .slice(0, 3)
              .map((recipe) => (
                <TrendingCakeCard key={recipe?.category_id} recipe={recipe} />
              ))}
        </div>
      </section>

      <section className="mb-16 bg-orange-100 p-8 rounded-lg overflow-hidden">
        <h2 className="text-3xl font-bold mb-4">
          Freshly Baked Happiness, Just for You!
        </h2>
        <p className="text-gray-600 mb-4">
          Get weekly slices of sweetness, special offers, and cake inspirations
          straight to your inbox!
        </p>

        <WeeklyRecipeDeliveryForm />
      </section>

      <section id="HandPicked" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
          Hand-Picked Collections
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {recipesData &&
            [...recipesData]
              .sort(() => Math.random() - 0.5)
              .slice(0, 2)
              .map((recipe) => (
                <HandPickedCollectionCard
                  key={recipe?.title}
                  collection={recipe}
                />
              ))}
        </div>
      </section>
      <section id="Special-Offers" className="mb-16 lg:pt-20">
        <h2 className="text-3xl font-bold mb-8">Special Offers</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {recipesData &&
            [...recipesData]
              .sort(
                (a, b) =>
                  new Date(b.published_date) - new Date(a.published_date)
              )
              .slice(0, 4)
              .map((recipe) => (
                <LatestRecipeCard
                  key={recipe.title}
                  recipe={recipe}
                  categories={categoriesData}
                />
              ))}
        </div>
      </section>
    </main>
  );
}
