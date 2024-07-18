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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:mt-9">
                {/* Slider */}
                {/* <div className="">hola aca va un carrusel de imagenes</div> */}

                <div className="m-2 md:col-span-2 md:w-[700px] mb-4 lg:mb-0 place-self-center">
                    <Image className="h-auto w-full rounded-md" src={link + product?.images[0] ?? 'not found'} alt={product?.title ?? 'not found'} width={300} height={300}/>
                </div>

                {/* Details */}
            <div className="grid col-span-1 px-5">
                    {/* title */}
                    <h1 className={`text-2xl lg:mt-0 lg:text-3xl antialiased ${titleFont.className}`}>{product?.title}</h1>
                    {/* Size */}
                    <p className="text-xl lg:text-2xl ">{product?.size.map((size, index)=> <span key={index}>{size}     </span>)}</p>
                    {/* Price */}
                    <h2 className="text-lg lg:text-xl font-bold">${product?.price}</h2>
                    {/* Description */}
                        <h3 className="text-lg font-bold">Descripcion</h3>
                        <p className="text-sm">{product?.description}</p>
                    {/* after of all we can add a size selector and effect button */}
                    <div className="place-self-end w-full">
                        <button className="bg-white text-black rounded-full p-4 font-bold w-full">Agregar al carrito</button> 
                    </div>
            </div>
        </div>
    </>

    );
}