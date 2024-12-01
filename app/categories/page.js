import CategoryCard from "@/components/card/CategoryCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import categoriesData from "../../data/categories.json";

export default function CategoryPage() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-[100px]">
        <h1 className="text-5xl font-bold mb-12">Categories</h1>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {categoriesData &&
            categoriesData.map((category) => (
              <CategoryCard key={category?.id} category={category} />
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
