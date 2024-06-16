import { NextResponse } from "next/server";
import { shoesSeed } from "./seedShoes";



export async function GET() {
    return NextResponse.json(shoesSeed)
}

export async function POST(req : Request) {
    const shoe = await req.json();
    const newShoe = {
        price : shoe.price,
        images: shoe.image,
        description : shoe.description,
        slug : shoe.slug,
        category : shoe.category,
        gender : shoe.gender,
        type : shoe.type,
        inStock : shoe.inStock,
        sizes : shoe.sizes,
        tags : shoe.tags,
        title : shoe.title
    };

    
    try {
    shoesSeed.products.push(newShoe);
    return NextResponse.json(newShoe, { status: 200 });
    } catch (error) {
    return NextResponse.json({ error }, { status: 500 });    
    }


}
