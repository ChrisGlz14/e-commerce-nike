import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/product";

export async function GET(
  request: Request,
  { params }: { params: { gender: string } }
) {
  try {

    await connectDB();

    const product = await Product.find({ gender: params.gender });

    if (!product) {
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);

  } catch (error) {
    console.error("Error obteniendo categoria:", error);

    return NextResponse.json(
      { error: "Error obteniendo categoria" },
      { status: 500 }
    );
  }
}