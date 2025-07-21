import Image from "next/image";
import Link from "next/link";
export default function CategoryCard({ category }) {
  return (
    <div className="text-center" key={category.id}>
      <Link href={`/${category.id}/recipes`}>
        <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
          <Image
            src={category.image}
            alt={category.name}
            className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
            width={100}
            height={100}
          />
        </div>
      </Link>
      <h2 className="text-xl font-semibold">{category.name}</h2>
    </div>
  );
}
