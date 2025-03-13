"use client";

import { Star, ThumbsUp } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ReviewSection({ productId }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      date: "October 15, 2023",
      rating: 5,
      comment:
        "This cake was absolutely delicious! It was moist, flavorful, and the perfect sweetness. Everyone at the party loved it. Will definitely order again!",
      helpful: 12,
    },
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      {/* Review Summary */}
      <div className="bg-muted/50 p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold">4.7</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4
                      ? "fill-primary text-primary"
                      : i === 4
                      ? "fill-primary text-primary opacity-70"
                      : "fill-muted text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Based on {reviews.length} reviews
            </div>
          </div>

          <div className="flex-1">
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((num) => {
                const count = reviews.filter(
                  (r) => Math.floor(r.rating) === num
                ).length;
                const percentage = (count / reviews.length) * 100;

                return (
                  <div key={num} className="flex items-center gap-2">
                    <div className="flex items-center gap-1 w-20">
                      <span>{num}</span>
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </div>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-12 text-right text-sm text-muted-foreground">
                      {count}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Write a Review */}
      <div className="border rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
        <form className="space-y-4">
          <div>
            <Label htmlFor="review-name">Your Name</Label>
            <Input id="review-name" placeholder="Enter your name" />
          </div>

          <div>
            <Label htmlFor="review-email">Email</Label>
            <Input
              id="review-email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label>Rating</Label>
            <div className="flex gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= (hoveredRating || rating)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="review-comment">Your Review</Label>
            <Textarea
              id="review-comment"
              placeholder="Write your review here..."
              className="min-h-[120px]"
            />
          </div>

          <Button type="submit">Submit Review</Button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-b-0">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium">{review.name}</div>
                <div className="text-sm text-muted-foreground">
                  {review.date}
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="mt-3">{review.comment}</p>

            <div className="mt-3 flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-muted-foreground"
              >
                <ThumbsUp className="h-4 w-4 mr-1" />
                Helpful ({review.helpful})
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
