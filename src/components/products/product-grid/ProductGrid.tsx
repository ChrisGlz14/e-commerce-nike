'use client'
import React from 'react'
import { Product } from '@/interfaces';
import ProductGridItem from './ProductGridItem';
import { motion } from 'framer-motion';

interface Props {
    products:Product[];
}

const ProductGrid = ({products}:Props) => {

  

  return (
    <motion.div 
    initial={{opacity:0, scale:0.5}}
    animate={{opacity:1, scale:1}}
    transition={{
      duration: 0.5,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}    
    
    className='grid grid-cols-2 lg:grid-cols-3  mb-10 lg:gap-7'>
        {
            products.map(product => (
              <div key={product.slug}>
               <ProductGridItem key={product.slug} product={product}></ProductGridItem>
              </div>
            )
        )}
    </motion.div>
  )
}

export default ProductGrid