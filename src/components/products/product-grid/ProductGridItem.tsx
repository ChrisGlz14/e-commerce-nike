'use client'
import { Product } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

interface Props {
  product: Product;
}



const ProductGridItem= ({product }: Props) => {

  const [mouseOverChangeImg, setMouseOverChangeImg] = useState(product.images[0])



  const baseUrl = 'https://nikearprod.vtexassets.com/arquivos/ids/'

  return (
    <div className='overflow-hidden flex flex-col m-3'>
      <Link href={`/api/shoes/${product.slug}`}>
        <Image 
                src={`${baseUrl}${mouseOverChangeImg}`}
                alt={product.title}
                width={500}
                height={500}
                onMouseEnter={() => setMouseOverChangeImg(product.images[1])}
                onMouseLeave={() => setMouseOverChangeImg(product.images[0])}
                className='w-full h-full
                 object-cover'
                />
      
      </Link>
                <div className='inline-block'>
                  <Link href={`/api/shoes/${product.slug}`}>
                  <span className='hover:text-blue-500 cursor-pointer inline-block m-0 p-0'>{product.title}</span>
                  </Link>
                </div>
        <span>${product.price}</span>
                
    </div>
  )
}

export default ProductGridItem