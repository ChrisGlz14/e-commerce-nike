export const dynamic = 'force-dynamic';
import { notFound } from "next/navigation";
import {SizeSelector} from "@/components/product/size-selector/SizeSelector";
import { inter, titleFont } from "@/app/config/fonts";
import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
import { ProductMobileSlideShow, ProductSlideShow } from "@/components";
import { Product as ProductModel } from '@/models/product';
import { connectDB } from "@/lib/mongodb";


const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// interface Props {
//      params: {
//         slug : string
//         title: string
//     }
// }

//  interface Product {
//      title: string;
//      slug: string;
//      description : string;
//      price: number;
//      brand: string;
//      images: string[];
//  }


 export default async function ProductPage({ params }: { params: { slug: string } }) {
   const { slug } = params;

   // 1. Conexión directa (Usa la MONGODB_URI que ya tienes en Vercel)
   await connectDB();

   // 2. Buscamos el producto sin usar ninguna URL externa
   
   const productRaw = await ProductModel.findOne({ slug }).lean();
   if (!productRaw) {
     notFound();
   }

   // 3. Serializamos para evitar errores de objetos complejos de MongoDB
   const product = JSON.parse(JSON.stringify(productRaw));





//  async function getProduct(slug: string): Promise<Product | null> {
//    const res = await fetch(`${baseUrl}/api/products/${slug}`, {
//        cache: "no-store",
//      });
//    if (!res.ok) throw new Error("Error al traer productos");
//          console.log(res)
//    return res.json();
//  }
//  export default async function ProductPage({ params }: Props) {
//      const { slug } = params;     
//      if (!slug) {
//          console.log("Error no se encontro el slug")
//          notFound()
//      }
//      const product = await getProduct(slug);
//      if (!product) {
//          console.log("Error no se encontro el producto")
//          notFound();
//      }

    return (
    <>
    {/* TENGO 1500 problemas con el sliideShow */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-9/12 mx-auto lg:mt-9  sm:mx-auto ">
                {/* Slider */}
                <div className="">hola aca va un carrusel de imagenes</div>

                {/* Mobile SlideShow */}

                <div className="m-2 md:col-span-2 mb-4 lg:mb-0 place-self-center w-full">
                    <ProductMobileSlideShow title={product.title} images={product.images} classname="block lg:hidden" />
                </div> 

                {/* Desktop SlideShow */}
                <div className="m-2 md:col-span-2 md:w-[700px] mb-4 lg:mb-0 place-self-center">
                   <ProductSlideShow title={product.title} images={product.images} classname="h-[500px] hidden lg:block"/>
                </div>





                {/* Details */}
            <div className="grid col-span-1 place-self-center justify-center items-center px-4 md:px-14">
                    {/* title */}
                    <h1 className={`text-2xl md:text-3xl lg:mt-0 lg:text-3xl antialiased mt-6 ${titleFont.className}`}>{product?.title}</h1>
                    {/* Size */}
                    {/* <SizeSelector selectedSize={product?.availableSizes]} availableSizes={product.availableSizes} allSizes={product.allSizes}/> */}
                    {/* Price */}
                    <h2 className="text-lg lg:text-xl font-bold mt-6">${product?.price}</h2>
                    {/* Description */}
                        <h3 className="text-lg font-bold mt-6">Descripcion</h3>
                        <p className="text-sm mt-6">{product?.description}</p>
                    {/* after of all we can add a size selector and effect button */}
                    {/* Quantity btn */}
                    <QuantitySelector quantity={1} />
                    <div className="place-self-end w-full mt-6">
                        <button className="bg-white text-black rounded-full p-4 font-bold w-full">Agregar al carrito</button> 
                    </div>
            </div>
        </div>
    </>

    );
}