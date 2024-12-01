import { getRating } from "@/utils/getRating";
import Image from "next/image";

export default function SuperDeliciousCard({ recipe }) {
  return (
    <>
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
      <p className="text-gray-600 capitalize">{recipe?.cooking_time}</p>
    </>
  );
}
