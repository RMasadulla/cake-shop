import { productModel } from "@/models/product";
import { NextResponse } from "next/server";

// GET all products or single product by ID
// Can fetch all products (/api/products)
// Can filter by category (/api/products?category=CATEGORY_ID)
// Can fetch single product by ID (/api/products?id=PRODUCT_ID)

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const category = searchParams.get("category");

    if (id) {
      // Get single product by ID
      const product = await productModel.findById(id).populate("category");
      if (!product) {
        return NextResponse.json(
          { success: false, message: "Product not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, data: product });
    } else {
      // Get all products (with optional category filter)
      let query = {};
      if (category) {
        query.category = category;
      }
      const products = await productModel.find(query).populate("category");
      return NextResponse.json({ success: true, data: products });
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// POST create new product
export async function POST(request) {
  try {
    const body = await request.json();
    const product = await productModel.create(body);
    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

// PUT update product
// Updates an existing product by ID (/api/products?id=PRODUCT_ID)
export async function PUT(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const body = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Product ID is required" },
        { status: 400 }
      );
    }

    const updatedProduct = await productModel
      .findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      })
      .populate("category");

    if (!updatedProduct) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updatedProduct });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

// DELETE product
// Deletes a product by ID (/api/products?id=PRODUCT_ID)
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Product ID is required" },
        { status: 400 }
      );
    }

    const deletedProduct = await productModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
