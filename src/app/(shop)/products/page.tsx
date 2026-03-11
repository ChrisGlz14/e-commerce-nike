import { ProductGridItem } from "@/components";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/product";
import Image from "next/image";

interface Props {
  searchParams: {
    gender?: string;
  };
  Product :{
    title: string;
    slug: string;
    description: string;
    brand: string; 
    price: number;
    images: string[];
  }
}

export default async function ProductsPage({ searchParams }: Props) {

  await connectDB();

  const filter: any = {};

  if (searchParams.gender) filter.gender = searchParams.gender;
  console.log("filter:", filter);

  

  const products = await Product.find(filter).lean();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-9/12 mx-auto lg:mt-9 sm:mx-auto">
      {products.map((product: any) => (
        <ProductGridItem
          key={product.slug}
          product={product}
        />
      ))}
    </div>
  );
}