import { notFound } from "next/navigation";
import SizeSelector from "@/components/product/size-selector/SizeSelector";
import { shoesSeed } from "@/app/api/shoes/seedShoes";
import { titleFont } from "@/app/config/fonts";

interface Props {
    params: {
        slug : string
    }
}

export default function ProductPage({params}:Props) {

    const {slug} = params;
    const product = shoesSeed.products.find((product)=>product.slug === slug)


    if (!params.slug) {

        notFound()
    } else {
        console.log("aca no hay pagina")
    }


    return (
        <main>
            <h1>Product Page holas</h1>
            
        </main>
    );
}