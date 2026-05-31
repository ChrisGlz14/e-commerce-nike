'use client'
import { Product } from '@/hooks/interfaces'
import { useCartStore } from '@/store/cart/cart-store'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

interface Props {
  product: Product;
}




const ProductGridItem = ({ product }: Props) => {

  const [mouseOverChangeImg, setMouseOverChangeImg] = useState(
    product.images?.[0] || "/placeholder.png"
  );

  const addItem = useCartStore((state) => state.addItem);

  

  return (
    <div className='overflow-hidden flex flex-col m-3'>
      <Link href={`/product/${product.slug}`}>
        <Image 
                src={mouseOverChangeImg}
                alt={product.title}
                width={500}
                height={500}
                onMouseLeave={() => setMouseOverChangeImg(product.images[0] || "/placeholder.png")}
                className='w-full h-full
                 object-cover'
                />
      
      </Link>
                <div className='inline-block'>
                  <Link href={`/product/${product.slug}`}>
                  <span className='hover:text-blue-500 cursor-pointer inline-block m-0 p-0'>{product.title}</span>
                  </Link>
                </div>
        <span>${product.price}</span>
        <button
          onClick={addItem}
          className="mt-2 w-full bg-black text-white text-sm py-1 px-3 rounded-md hover:bg-gray-900 transition-all"
        >
          Agregar al carrito
        </button>
    </div>
  )
}

export { ProductGridItem };