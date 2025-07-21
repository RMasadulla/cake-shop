import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Category image is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

export const categoryModel =
  mongoose.models.categories ?? mongoose.model("categories", categorySchema);
