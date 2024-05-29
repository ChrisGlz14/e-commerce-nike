import React from 'react'
import { Product } from '@/interfaces';

interface Props {
    products:Product[];
}

const ProductGrid = ({products}:Props) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10'>
        {
            products.map(product => (
                <span key={product.slug}>{product.title}</span>
            )
        )}
    </div>
  )
}

export default ProductGrid