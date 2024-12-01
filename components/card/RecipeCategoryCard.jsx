import Image from "next/image";

export default function RecipeCategoryCard({ catRecipe }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Image
        src={`/thumbs/${catRecipe?.thumbnail}`}
        alt={catRecipe?.title}
        className="w-full h-48 object-cover"
        width={100}
        height={100}
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{catRecipe?.title}</h2>
      </div>
    </div>
  );
}
