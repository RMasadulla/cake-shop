import CategoryCard from "@/components/card/CategoryCard";
import categoriesData from "../../../data/categories.json";

export default function CategoryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-12">Categories</h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {categoriesData &&
          categoriesData.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
      </div>
    </main>
  );
}
