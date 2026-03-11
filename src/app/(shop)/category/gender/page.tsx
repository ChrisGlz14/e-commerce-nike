// export const dynamic = 'force-dynamic';
// 'use client'
// import { Product, Category } from "@/interfaces";
// import {ProductGrid} from "@/components/products/product-grid/ProductGrid";
// import { Product as ProductModel } from '@/models/product';
// import { titleFont } from '@/app/config/fonts';
// import { connectDB } from "@/lib/mongodb";


// interface Props {
//     params : {
//         gender: Product["gender"];
//     }
// }


// const labels:Record<Category, string> = {

//     men: 'Para Hombres',
//     women: 'Para Mujeres',
//     kid: 'Para Niños',
//     unisex: 'Unisex'
// }



// export default async function CategoryPage({ searchParams }: Props) {
//     const gender = searchParams;
//     await connectDB();

//   const categoryName = await ProductModel.findOne({ name: searchParams.gender }).lean();

//   if (!categoryName) {
//     return <p className="text-center">Categoría no encontrada</p>;
//   }


//   const category = JSON.parse(JSON.stringify(categoryName));


 



//     return (
//         <>
//         <h1 className={`${titleFont.className} text-3xl text-center mb-2`}>{`Articulos ${category.name}`} </h1>
//         <ProductGrid products={category.products as Product[]} />
//         </>
//     )
// }