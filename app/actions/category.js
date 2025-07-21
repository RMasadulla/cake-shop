// actions/category.js
"use server";

import * as categoryQueries from "@/database/queries/category";
import { deleteImage, uploadImage } from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";

export async function getAllCategories() {
  try {
    const categories = await categoryQueries.getAllCategories();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
}

export async function getCategoryById(id) {
  try {
    const category = await categoryQueries.getCategoryById(id);
    if (!category) throw new Error("Category not found");
    return category;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createCategory(formData) {
  try {
    const name = formData.get("name");
    const imageFile = formData.get("image");

    if (!imageFile) {
      throw new Error("Image is required");
    }

    const bytes = await imageFile.arrayBuffer();
    const imageUrl = await uploadImage(Buffer.from(bytes));

    const result = await categoryQueries.createCategory({ name, imageUrl });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function updateCategory(id, formData) {
  try {
    const currentCategory = await categoryQueries.getCategoryById(id);
    if (!currentCategory) {
      throw new Error("Category not found");
    }

    const name = formData.get("name");
    const imageFile = formData.get("image");

    let imageUrl;
    if (imageFile) {
      if (currentCategory.image) await deleteImage(currentCategory.image);
      const bytes = await imageFile.arrayBuffer();
      imageUrl = await uploadImage(Buffer.from(bytes));
    }

    const result = await categoryQueries.updateCategory(id, {
      name: name || currentCategory.name,
      imageUrl: imageUrl || currentCategory.imageUrl,
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function deleteCategory(id) {
  try {
    const category = await categoryQueries.getCategoryById(id);
    if (!category) {
      throw new Error("Category not found");
    }

    if (category.image) await deleteImage(category.image);
    await categoryQueries.deleteCategory(id);

    revalidatePath("admin/category");

    return { success: true };
  } catch (error) {
    throw new Error(error.message);
  }
}
