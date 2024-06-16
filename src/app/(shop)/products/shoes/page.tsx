
import { shoesSeed } from '@/app/api/shoes/seedShoes'
import ProductGrid from '@/components/products/product-grid/ProductGrid'
import React from 'react'
import { Product } from '@/interfaces';



const products: Product[] = shoesSeed.products;

const Shoes = () => {
  return (
    <ProductGrid products={products}/>
  )
}

export default Shoes