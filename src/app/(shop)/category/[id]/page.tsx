'use client'
export const dynamic = 'force-dynamic';
import { Product, Category } from "@/interfaces";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import { titleFont } from '@/app/config/fonts';
import { useEffect, useState } from "react";


interface Props {
    params : {
        id: Category;
    }
}



const labels:Record<Category, string> = {

    men: 'Para Hombres',
    women: 'Para Mujeres',
    kid: 'Para Niños',
    unisex: 'Unisex'
}



export default function CategoryPage({ params }: Props) {

  const { id } = params;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(`/api/products?gender=${id}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [id]);

  if (loading) return <p className="text-center">Cargando...</p>;


    return (
        <>
        <h1 className={`${titleFont.className} text-3xl text-center mb-2`}>{`Articulos ${labels[id]}`} </h1>
        <ProductGrid 
        products={products}
        />
        </>
    )
}