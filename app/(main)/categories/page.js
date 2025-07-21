import { getAllCategories } from "@/app/actions/category";
import CategoryCard from "@/components/card/CategoryCard";

export default async function CategoryPage() {
  const categories = await getAllCategories();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-12">Categories</h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {categories &&
          categories.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
      </div>
    </main>
  );
}
