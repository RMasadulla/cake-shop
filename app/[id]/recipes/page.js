import BottomFooter from "@/components/BottomFooter";
import RecipeCategoryCard from "@/components/card/RecipeCategoryCard";
import Header from "@/components/Header";
import useData from "@/hooks/useData";
import titleReplace from "@/utils/titleReplace";
import Link from "next/link";

export default function RecipePage({ params: { id } }) {
  const { recipesData, categoriesData } = useData();

  const categoryRecipe = recipesData.filter(
    (recipe) => recipe?.category_id === id
  );

  const categoryName = categoriesData.find((cat) => cat.id === id)?.name;

  return (
    <div class="bg-white text-gray-900">
      <Header />
      <main class="container mx-auto px-4 py-8 mt-[100px]">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {categoryName}{" "}
              <span className="text-gray-500 text-2xl font-normal">
                ({categoryRecipe?.length} Recipes)
              </span>
            </h1>
            <p className="text-gray-600">
              One thing I learned living in the Canarsie section of Brooklyn, NY
              was how to cook a good Italian meal. Here is a recipe I created
              after having this dish in a restaurant. Enjoy!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryRecipe &&
            categoryRecipe.map((catRecipe) => (
              <Link
                key={catRecipe?.title}
                href={`/${categoryName}/${titleReplace(catRecipe?.title)}`}
              >
                <RecipeCategoryCard
                  key={catRecipe?.category_id}
                  catRecipe={catRecipe}
                />
              </Link>
            ))}
        </div>
      </main>
      <BottomFooter />
    </div>
  );
}
