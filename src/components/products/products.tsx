"use client"
import React, { useEffect } from 'react';
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
  const res = await fetch("/api/products/");
  const data = await res.json();
  return data
}

type ProductsProps = {
  shoes: Array<any>; 
}


const Products: React.FC<ProductsProps> = ({ shoes: initialShoes }) => {
  // 1. Usamos un nombre claro y siempre inicializamos como array
  const [shoes, setShoes] = React.useState(initialShoes || []);

  useEffect(() => {
    // Si no vinieron datos del server, los buscamos
    if (!initialShoes || initialShoes.length === 0) {
      fetchShoes().then(data => {
        // IMPORTANTE: Asegúrate de que 'data' sea el array
        // Si tu API devuelve { products: [...] }, usa data.products
        setShoes(Array.isArray(data) ? data : []);
      });
    }
  }, [initialShoes]);

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
          <Link key={shoe.id} href={`api/product/${shoe.slug}`} className="col-start-1 row-span-3 justify-self-end self-baseline h-[600px] relative">
            <motion.div
              initial="offscreen"
              whileInView="onscreen2"
              variants={productVariants}
              
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
          <Link href={`/product/${shoe.slug}`}>
          <motion.div
          initial="offscreen"
          whileInView="onscreen2"
          variants={productVariants}
          
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

          <Link href={`/product/${shoe.slug}`}>
          <motion.div
          initial="offscreen"
          whileInView="onscreen2"
          variants={productVariants}
          
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

export { Products };
