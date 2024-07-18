'use client'
import { notFound } from "next/navigation";
import SizeSelector from "@/components/product/size-selector/SizeSelector";
import { shoesSeed } from "@/app/api/shoes/seedShoes";
import { titleFont } from "@/app/config/fonts";
import Image from "next/image";
import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
;

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

    if (!product) {
        notFound();
    }

    return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:mt-9">
                {/* Slider */}
                {/* <div className="">hola aca va un carrusel de imagenes</div> */}

                <div className="m-2 md:col-span-2 md:w-[700px] mb-4 lg:mb-0 place-self-center">
                    <Image className="h-auto w-full rounded-md" src={link + product?.images[0] ?? 'not found'} alt={product?.title ?? 'not found'} width={300} height={300}/>
                </div>

                {/* Details */}
            <div className="grid col-span-1 place-self-center px-5">
                    {/* title */}
                    <h1 className={`text-2xl lg:mt-0 lg:text-3xl antialiased mt-6 ${titleFont.className}`}>{product?.title}</h1>
                    {/* Size */}
                    <SizeSelector selectedSize={product.sizes[0]} availableSizes={product?.sizes ?? []}/>
                    {/* Price */}
                    <h2 className="text-lg lg:text-xl font-bold mt-6">${product?.price}</h2>
                    {/* Description */}
                        <h3 className="text-lg font-bold mt-6">Descripcion</h3>
                        <p className="text-sm mt-6">{product?.description}</p>
                    {/* after of all we can add a size selector and effect button */}
                    {/* Quantity btn */}
                    <QuantitySelector />
                    <div className="place-self-end w-full mt-6">
                        <button className="bg-white text-black rounded-full p-4 font-bold w-full">Agregar al carrito</button> 
                    </div>
            </div>
        </div>
    </>

    );
}