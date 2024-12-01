import Image from "next/image";
import Link from "next/link";
export default function PopularCategoriesCard({ category }) {
  return (
    <Link href={`/${category?.category?.id}/recipes`}>
      <div className="cursor-pointer text-center group">
        <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
          <Image
            src={category?.category?.image}
            alt={category?.category?.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            width={100}
            height={100}
          />
        </div>
        <p className="transition-transform duration-300 group-hover:scale-105">
          {category?.category?.name}
        </p>
      </div>
    </Link>
  );
}
