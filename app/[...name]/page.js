import { SaveIcon, ShareIcon } from "@/components/Icons";
import useData from "@/hooks/useData";
import formatDate from "@/utils/formatDate";
import { getCategoryNameById } from "@/utils/getCategoryNameById";
import titleReplace from "@/utils/titleReplace";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetailsPage({ params: { name } }) {
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
    <>
      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {details?.title}
        </h1>
        <div className="flex items-center space-x-4 mb-6">
          <Image
            src="/avater.png"
            alt={details?.author}
            className="w-8 h-8 rounded-full"
            width={1368}
            height={768}
          />
          <span className="text-gray-600">{details?.author}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">
            {time} {unit?.replace("minutes", "mins")}{" "}
          </span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">
            {formatDate(details?.published_date)}
          </span>
        </div>
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <ShareIcon />
              Share
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <SaveIcon />
              Save
            </button>
          </div>
        </div>
        <Image
          src="/single-banner.jpg"
          alt="Cooking Image"
          className="w-full h-auto mb-8 rounded-lg"
          width={1770}
          height={1180}
        />
        <p className="text-gray-600 mb-8">
          One thing I learned living in the Catskills section of Brooklyn, NY
          was how to cook a good Italian meal. Here is a recipe I created after
          having this dish in a restaurant. Enjoy!
        </p>

        <h2 className="text-3xl font-bold mb-4">Before you begin</h2>
        <p className="mb-8">
          Food qualities braise chicken cuts bowl through slices butternut
          snack. Tender meat juicy dinners. One-pot low heat plenty of time
          adobo fat raw soften fruit. sweet renders bone-in marrow richness
          kitchen, fricassee basted putter.
        </p>

        <h2 className="text-3xl font-bold mb-4">Here are the basics</h2>
        <p className="mb-8">
          Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy
          sauce burgers brisket. polenta mustard hunk greens. Wine technique
          snack skewers chuck excess. Oil heat slowly. slices natural delicious,
          set aside magic tbsp skillet, bay leaves brown centerpiece. fruit
          soften edges frond slices onion snack pork steem on wines excess
          technique cup; Cover smoker soy sauce.
        </p>

        <blockquote className="text-3xl font-bold italic text-center my-12 px-4">
          "One cannot think well, love well, sleep well, if one has not dined
          well."
        </blockquote>
        <p className="text-center text-gray-600 mb-12">
          — Virginia Woolf, A Room of One's Own
        </p>

        <h2 className="text-3xl font-bold mb-4">In the kitchen</h2>
        <p className="mb-8">
          Gastronomy atmosphere set aside. Slice butternut cooking home.
          Delicious romantic undisturbed raw platter will meld. Thick Skewers
          skillet natural, smoker soy sauce wait roux. slices rosette bone-in
          simmer. Romantic fall-off-the-bone butternut chuck under romas,
          Skewers on culinary experience.
        </p>

        <Image
          src={`/thumbs/${details?.thumbnail}`}
          alt="Cooking in kitchen"
          className="w-full h-auto mb-8 rounded-lg max-w-xl mx-auto"
          width={1770}
          height={1180}
        />

        <p className="mb-8">
          Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy
          sauce burgers brisket. polenta mustard hunk greens. Wine technique
          snack skewers chuck excess. Oil heat slowly. slices natural delicious,
          set aside magic tbsp skillet, bay leaves brown centerpiece. fruit
          soften edges frond slices onion snack pork steem on wines excess
          technique cup; Cover smoker soy sauce.
        </p>
      </article>

      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CategoryBasedRecipe &&
            CategoryBasedRecipe.sort(
              (a, b) => b.rating.rating_count - a.rating.rating_count
            )
              .slice(0, 4)
              .map((recipe) => {
                return (
                  <Link
                    key={recipe?.title}
                    href={`/${getCategoryNameById(
                      recipe?.category_id
                    )}/${titleReplace(recipe?.title)}`}
                  >
                    <div>
                      <Image
                        src={`/thumbs/${recipe?.thumbnail}`}
                        alt={recipe?.title}
                        className="w-full h-60 object-cover rounded-lg mb-2"
                        width={1971}
                        height={1068}
                      />
                      <h3 className="font-semibold">{recipe?.title}</h3>
                    </div>
                  </Link>
                );
              })}
        </div>
      </section>
    </>
  );
}
