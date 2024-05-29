import ProductGrid from '@/components/products/product-grid/ProductGrid'
import { initialData } from '@/seeds/seed'
import React from 'react'



const products = initialData.products

const Shoes = () => {
  return (
    <ProductGrid products={products}/>
  )
}

export default Shoes