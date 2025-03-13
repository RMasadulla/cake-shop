"use client";

import useData from "@/hooks/useData";
import titleReplace from "@/utils/titleReplace";
import Image from "next/image";

import {
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";

import RelatedProductCard from "@/components/card/RelatedProductCard";
import ReviewSection from "@/components/ReviewSection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useState } from "react";

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

  // new add
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = {
    name: "Chocolate Celebration Cake",
    price: 49.99,
    rating: 4.8,
    reviewCount: 124,
    description:
      "A delicious chocolate cake with layers of rich ganache and chocolate buttercream frosting. Perfect for birthdays, anniversaries, or any special occasion.",
    details: {
      ingredients:
        "Flour, Sugar, Cocoa Powder, Eggs, Butter, Milk, Vanilla Extract, Baking Powder, Salt",
      weight: "2.5 kg",
      serves: "12-16 people",
      allergens: "Contains: Wheat, Eggs, Milk, May contain traces of nuts",
    },
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link
          href={`/${details?.category_id}/recipes`}
          className="hover:text-primary"
        >
          {name[0]}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground">{details?.title}</span>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden">
            <Image
              src={`/thumbs/${details?.thumbnail}`}
              alt={details?.title}
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`border rounded-md overflow-hidden flex-shrink-0 ${
                  activeImage === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={`/thumbs/${details?.thumbnail}` || "/placeholder.svg"}
                  alt={`${details?.title} thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{details?.title}</h1>
            <div className="flex items-center mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(details?.rating?.average_rating)
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                {details?.rating?.average_rating} (
                {details?.rating?.rating_count} reviews)
              </span>
            </div>
          </div>

          <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>

          <p className="text-muted-foreground">{details?.description}</p>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-medium mr-4">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <button
                  onClick={decrementQuantity}
                  className="p-2 hover:bg-muted"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="p-2 hover:bg-muted"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="flex-1" size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>
          </div>

          <Separator />

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <p>{product.description}</p>
              <p className="mt-4">
                This cake is made with the finest ingredients and baked fresh to
                order. It's perfect for any celebration or special occasion.
              </p>
            </TabsContent>
            <TabsContent value="ingredients" className="pt-4">
              <p className="font-medium">Ingredients:</p>
              <p className="mt-2">{product.details.ingredients}</p>
              <p className="mt-4 font-medium">Allergens:</p>
              <p className="mt-2">{product.details.allergens}</p>
            </TabsContent>
            <TabsContent value="details" className="pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Weight:</p>
                  <p>{product.details.weight}</p>
                </div>
                <div>
                  <p className="font-medium">Serves:</p>
                  <p>{product.details.serves}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Review Section */}
      <ReviewSection productId="chocolate-cake" />

      {/* Related Products */}
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8">You might also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CategoryBasedRecipe &&
            CategoryBasedRecipe.sort(
              (a, b) => b.rating.rating_count - a.rating.rating_count
            )
              .slice(0, 4)
              .map((recipe) => {
                return (
                  <RelatedProductCard key={recipe?.title} recipe={recipe} />
                );
              })}
        </div>
      </section>
    </main>
  );
}
