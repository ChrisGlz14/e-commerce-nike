import { shoes } from "./shoes";

export async function GET() {
    return Response.json(shoes)
}

interface Shoe {
    id: number
    name: string
}

export async function POST(request: Request) {
    const shoe = await request.json();
    const newShoe = {
        id: shoes.length + 1,
        shoe : shoe.name,
        price : shoe.price,
        image: shoe.image       
    } 

    // shoes.push(newShoe)
    // return new Response(JSON.stringify(newShoe),{
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     status : 200
    // })
}