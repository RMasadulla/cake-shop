// api/categories/route.js
import * as categoryQueries from "@/database/queries/category";
import { deleteImage, uploadImage } from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    let data;
    if (id) {
      data = await categoryQueries.getCategoryById(id);
      if (!data) {
        return NextResponse.json(
          { success: false, message: "Category not found" },
          { status: 404 }
        );
      }
    } else {
      data = await categoryQueries.getAllCategories();
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const imageFile = formData.get("image");

    if (!imageFile) {
      return NextResponse.json(
        { success: false, message: "Image is required" },
        { status: 400 }
      );
    }

    const bytes = await imageFile.arrayBuffer();
    const imageUrl = await uploadImage(Buffer.from(bytes));

    const category = await categoryQueries.createCategory({ name, imageUrl });

    return NextResponse.json(
      { success: true, data: category },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

export async function PUT(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    const formData = await request.formData();
    const newName = formData.get("name");
    const imageFile = formData.get("image");

    const category = await categoryQueries.getCategoryById(id);
    if (!category) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 }
      );
    }

    let imageUrl;
    if (imageFile) {
      if (category.image) await deleteImage(category.image);
      const bytes = await imageFile.arrayBuffer();
      imageUrl = await uploadImage(Buffer.from(bytes));
    }

    const updatedCategory = await categoryQueries.updateCategory(id, {
      name: newName || category.name,
      imageUrl,
    });

    return NextResponse.json({ success: true, data: updatedCategory });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const category = await categoryQueries.getCategoryById(id);
    if (!category) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 }
      );
    }

    if (category.image) await deleteImage(category.image);
    await categoryQueries.deleteCategory(id);

    return NextResponse.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
