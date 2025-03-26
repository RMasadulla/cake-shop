"use client";

import Image from "next/image";
import { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

const product = {
  images: [
    `breakfast-1.jpg`,
    `breakfast-2.jpg`,
    `breakfast-3.jpg`,
    `breakfast-4.jpg`,
  ],
};

const ProductGallery = ({ details }) => {
  const [mainImage, setMainImage] = useState(details?.thumbnail);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="border rounded-lg overflow-hidden">
        <InnerImageZoom
          src={`/thumbs/${mainImage}`}
          zoomSrc={`/thumbs/${mainImage}`}
          alt="Product"
          zoomType="hover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 pb-2">
        {product.images.map((image, index) => (
          <div
            key={index}
            className="w-20 h-20 cursor-pointer rounded-md"
            onClick={() => setMainImage(image)}
          >
            <Image
              height={1000}
              width={1000}
              src={`/thumbs/${image}`}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
