import { notFound } from "next/navigation";
import SizeSelector from "@/components/product/size-selector/SizeSelector";
import { shoesSeed } from "@/app/api/shoes/seedShoes";
import { titleFont } from "@/app/config/fonts";
import Image from "next/image";

interface Props {
    params: {
        slug : string
        title: string
    }

}

export default function ProductPage({params}:Props) {
    const link = "https://nikearprod.vtexassets.com/arquivos/ids/"
    const {slug} = params;
    const product = shoesSeed.products.find((product)=>product.slug === slug)


    if (!params.slug) {

        notFound()
    }

    return (
        <>
    <main className="flex flex-col lg:flex-row m-4 lg:mt-9 lg:justify-center lg:m-auto gap-7 lg:w-[1000px]">
        <div className="bg-red-400 w-full lg:w-28 mb-4 lg:mb-0">hola aca va un carrusel</div>
        <div className="w-full lg:w-[500px] flex justify-center m-auto mb-4 lg:mb-0">
            <Image className="h-auto w-full rounded-md" src={link + product?.images[0] ?? 'not found'} alt={product?.title ?? 'not found'} width={300} height={300}/>
        </div>

        <div className="flex flex-col w-full lg:w-auto">
            <h1 className={`text-2xl mt-5 lg:mt-0 lg:text-3xl ${titleFont.className}`}>{product?.title}</h1>
            <p className="text-xl lg:text-2xl my-5">{product?.size[1]}</p>
            <h2 className="text-lg lg:text-xl font-bold">${product?.price}</h2>
            <div className="w-full lg:w-96">
                <p className="mt-5 mb-5">{product?.description}</p>
            </div>
            {/* after of all we can add a size selector and effect button */}
            <div className="flex mt-auto">
                <button className="bg-white text-black rounded-full p-4 font-bold w-full">Agregar al carrito</button> 
            </div>
        </div>
    </main>
</>

    );
}