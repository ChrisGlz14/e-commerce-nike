"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { shoesInitialData } from '@/seeds/seedShoesHome';

const productVariants: Variants = {
  offscreen: {
    y: 80
  },
  offscreenMid: {
    y: 120
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  },
  onscreen2: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
}

const lirysVariants: Variants = {
  offscreen: {
    x: 0
  },
  offscreenAnimation: {
    y: 120
  },
  onscreen: {
    x: -390,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

const fetchShoes = async () => {
  const res = await fetch('/api/shoes');
  const data = await res.json();
  return console.log(data)
}
fetchShoes()
type ProductsProps = {
  shoes: Array<any>; 
}

const Products: React.FC<ProductsProps> = ({ shoes }) => {
  const handleViewPort = (leave: any) => {
    leave
  }

  return (
    <main className="overflow-x-auto h-screen pt-28 overflow-y-hidden">
      <motion.h2 
        initial="offscreen" 
        whileInView="onscreen" 
        variants={lirysVariants} 
        className='text-white text-5xl text-center pb-16 font-bold antialiased'>
        WRITE THE FUTURE 
      </motion.h2>

      <div className='grid grid-cols-2 grid-rows-2 items-center gap-12'>
        {shoes.map(shoe => (
          <React.Fragment key={shoe.id}>
          <Link key={shoe.id} href={`/api/shoes/${shoe.id}`} className="col-start-1 row-span-3 justify-self-end self-baseline h-[600px] relative">
            <motion.div
              initial="offscreen"
              whileInView="onscreen2"
              variants={productVariants}
              onViewportLeave={handleViewPort}
            >
              <Image 
                src={shoesInitialData[0].image}
                alt={shoe.title}
                width={600}
                height={600}
                className='object-cover h-[600px] transition-transform duration-300 hover:scale-105'
              />
            </motion.div>
          </Link>

          {/* 2th img */}  
          <Link href={`/api/shoes/${shoe.id}`}>
          <motion.div
          initial="offscreen"
          whileInView="onscreen2"
          variants={productVariants}
          onViewportLeave={handleViewPort}
          >
            <Image 
            src={shoesInitialData[1].image}
            alt={shoe.title}
            width={600}
            height={300}
            className='object-cover h-[276px] transition-transform duration-300 hover:scale-105'
            />
          </motion.div>
          </Link>

          <Link href={`/api/shoes/${shoe.id}`}>
          <motion.div
          initial="offscreen"
          whileInView="onscreen2"
          variants={productVariants}
          onViewportLeave={handleViewPort}
          >
            <Image 
            src={shoesInitialData[2].image}
            alt={shoe.title}
            width={600}
            height={300}
            className='object-cover h-[276px] transition-transform duration-300 hover:scale-105'
            />
          </motion.div>
          
          </Link>



          </React.Fragment>
          
        ))}
      </div>
    </main>
  );
}

export default Products;
