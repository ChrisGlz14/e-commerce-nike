import { NextResponse } from "next/server";
import { shoesSeed } from "./seedShoes";
import { Product, Size, Category, ValidTypes } from "@/interfaces";

export async function GET() {
    return NextResponse.json(shoesSeed)
}

export async function POST(req: Request) {
    const shoe = await req.json();

    const validSizes: Size[] = [
        "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5",
        "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5",
        "12", "12.5", "13"
    ];

    const allSizes: Size[] = shoe.allSizes.filter((size: any): size is Size => {
        return validSizes.includes(size);
    });


    const sizes: Size[] = shoe.sizes.filter((size: any): size is Size => {
        return validSizes.includes(size);
    });


    

    const newShoe: Product = {
        price: shoe.price,
        images: shoe.images,
        description: shoe.description,
        slug: shoe.slug,
        gender: shoe.gender as Category, // Asegúrate de que `shoe.gender` sea uno de los valores válidos de `Category`
        type: shoe.type as ValidTypes, // Asegúrate de que `shoe.type` sea uno de los valores válidos de `ValidTypes`
        inStock: shoe.inStock,
        allSizes: allSizes,
        availableSizes: sizes,
        sale: shoe.sale,
        tags: shoe.tags,
        title: shoe.title
    };

    
    try {
        if (!Array.isArray(shoesSeed.products)) {
            throw new Error('shoesSeed.products no es un array');
        }
        shoesSeed.products.push(newShoe); 
        return NextResponse.json(newShoe, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error || 'Unknown error' }, { status: 500 });
    }

}
