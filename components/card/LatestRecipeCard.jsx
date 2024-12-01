import Image from "next/image";
export default function LatestRecipeCard({ recipe, categories }) {
  const categroy = categories.find((cat) => cat.id === recipe?.category_id);

  return (
    <div>
      <Image
        src={`/thumbs/${recipe?.thumbnail}`}
        alt={recipe?.title}
        className="w-full h-[300px] object-cover rounded-lg mb-4"
        width={1674}
        height={1256}
      />
      <h3 className="text-lg font-semibold mb-2">{recipe?.title}</h3>
      <p className="text-gray-600">{categroy?.name}</p>
    </div>
  );
}
