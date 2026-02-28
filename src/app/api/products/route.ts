import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/product";
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({ isActive: true });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Error obteniendo productos" },
      { status: 500 } 
    );
  }
}

// export async function POST(request: Request) {
//       await connectDB()
//       const data = await request.json()
//       const produts = await Product.create( data )
//       return NextResponse.json(produts)
//   }