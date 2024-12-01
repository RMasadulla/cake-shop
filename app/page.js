import SuperDeliciousCard from "@/components/card/SuperDeliciousCard";
import Image from "next/image";

import HandPickedCollectionCard from "@/components/card/HandPickedCollectionCard";
import LatestRecipeCard from "@/components/card/LatestRecipeCard";
import PopularCategoriesCard from "@/components/card/PopularCategoriesCard";
import WeeklyRecipeDeliveryForm from "@/components/form/WeeklyRecipeDeliveryForm";
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
    <>
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
            <Link
              href={`/${getCategoryNameById(
                randomRecipe?.category_id
              )}/${titleReplace(randomRecipe?.title)}`}
              className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
            >
              View Recipe
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-16" id="super_delicious">
        <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {sortedRecipes &&
            sortedRecipes.slice(0, 3).map((recipe) => (
              <Link
                key={recipe?.category_id}
                href={`/${getCategoryNameById(
                  recipe?.category_id
                )}/${titleReplace(recipe?.title)}`}
              >
                {" "}
                <SuperDeliciousCard recipe={recipe} />
              </Link>
            ))}
        </div>
      </section>
      <section className="mb-16">
        <div className="flex justify-between items-top">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <Link href="/categories" className="text-orange-500">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {popularCategory
            .sort((a, b) => b.recipeCount - a.recipeCount)
            .slice(0, 6)
            .map((categoryItem) => (
              <PopularCategoriesCard
                key={categoryItem?.name}
                category={categoryItem}
              />
            ))}
        </div>
      </section>
      <section className="mb-16 bg-orange-100 p-8 rounded-lg overflow-hidden">
        <h2 className="text-3xl font-bold mb-4">Deliciousness to your inbox</h2>
        <p className="text-gray-600 mb-4">
          Enjoy weekly hand picked recipes and recommendations
        </p>
        <WeeklyRecipeDeliveryForm />
      </section>
      <section className="mb-16">
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
      <section id="latest-recipes" className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {recipesData &&
            [...recipesData]
              .sort(
                (a, b) =>
                  new Date(b.published_date) - new Date(a.published_date)
              )
              .slice(0, 4)
              .map((recipe) => (
                <Link
                  key={recipe.title}
                  href={`/${getCategoryNameById(
                    recipe?.category_id
                  )}/${titleReplace(recipe?.title)}`}
                >
                  <LatestRecipeCard
                    recipe={recipe}
                    categories={categoriesData}
                  />
                </Link>
              ))}
        </div>
      </section>
    </>
  );
}
