import { ProductGridItem } from "@/components";
import { Category, Product } from "@/interfaces/product.interface";
import { connectDB } from "@/lib/mongodb";
import { Product as ProductModel } from "@/models/product";


interface PageProps {
  searchParams?: {
    gender?: Category;
  };
}



export default async function ProductsPage({ searchParams }: PageProps) {

  await connectDB();

  const filter: any = {};

  if (searchParams?.gender) filter.gender = searchParams.gender;

  const products = JSON.parse(JSON.stringify(await ProductModel.find(filter).lean()));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-9/12 mx-auto lg:mt-9 sm:mx-auto">
      {products.map((product: Product) => (
        <ProductGridItem
          key={product.slug}
          product={product}
        />
      ))}
    </div>
  );
}