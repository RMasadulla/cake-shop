import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [1, "Price must be greater than 0"],
    },
    category: {
      type: ObjectId,
      ref: "category",
      required: [true, "Category is required"],
    },
    images: {
      type: [String], // Array of image URLs
      validate: [arrayLimit, "At least one image is required"],
    },
    stock: {
      type: Number,
      required: true,
      min: [0, "Stock cannot be negative"],
    },
  },
  { timestamps: true }
);

function arrayLimit(val) {
  return val.length > 0;
}

export const productModel =
  mongoose.models.products ?? mongoose.model("products", productSchema);
