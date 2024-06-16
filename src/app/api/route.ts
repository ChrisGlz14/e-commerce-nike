import { dbConnect } from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";
export async function GET() {
    await dbConnect()

    const produts = await Product.find()
    return NextResponse.json(produts)
}

export async function POST(request: Request) {
    await dbConnect()
    const data = await request.json()


    const produts = await Product.create( data )
    return NextResponse.json(produts)
}