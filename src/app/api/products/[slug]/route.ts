import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/product";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {

    await connectDB();

    const product = await Product.findOne({ slug: params.slug });

    if (!product) {
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);

  } catch (error) {
    console.error("Error obteniendo producto:", error);

    return NextResponse.json(
      { error: "Error obteniendo producto" },
      { status: 500 }
    );
  }
}