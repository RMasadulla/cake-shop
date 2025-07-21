// database/queries/category/index.js

import { categoryModel } from "@/models/category";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/idReplacer";

export async function getAllCategories() {
  const categories = await categoryModel.find().lean();
  return replaceMongoIdInArray(categories);
}

export async function getCategoryById(id) {
  const category = await categoryModel.findById(id).lean();
  if (!category) return null;
  return replaceMongoIdInObject(category);
}

export async function createCategory({ name, imageUrl }) {
  return await categoryModel.create({ name, image: imageUrl });
}

export async function updateCategory(id, { name, imageUrl }) {
  const updateData = { name };
  if (imageUrl) updateData.image = imageUrl;

  return await categoryModel.findByIdAndUpdate(id, updateData, { new: true });
}

export async function deleteCategory(id) {
  return await categoryModel.findByIdAndDelete(id);
}
