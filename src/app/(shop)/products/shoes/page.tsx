export const dynamic = 'force-dynamic';
import ProductGrid from '@/components/products/product-grid/ProductGrid'
import React from 'react'
import { Product } from '@/interfaces';


async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    cache: "no-store"
  }); 

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

const Shoes = async () => {
  const products = await getProducts();
  return (
    <ProductGrid products={products}/>
  )
}

export default Shoes