export const dynamic = 'force-dynamic';
import {  ProductGrid } from '@/components/products/product-grid/ProductGrid'
import React from 'react'
import { connectDB } from '@/lib/mongodb';
import { Product as ProductModel } from '@/models/product';
import { Product } from '@/hooks/interfaces';





const Shoes = async () => {
  await connectDB();
  const productsRaw = await ProductModel.find({ isActive: true }).lean();
  const products = JSON.parse(JSON.stringify(productsRaw)) as Product[];
  return (
    <ProductGrid products={products}/>
  )
}

export default Shoes