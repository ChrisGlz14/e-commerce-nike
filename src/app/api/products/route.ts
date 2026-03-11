import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/product";


export async function GET() {
  try {

    await connectDB();
    
    const products = await Product.find({ isActive: true });
    return NextResponse.json(products);

  } catch (error) {
    console.error("❌ Error en la API de productos:", error);
    return NextResponse.json(
      { error: "Error obteniendo productos" },
      { status: 500 } 
    );
  }
}