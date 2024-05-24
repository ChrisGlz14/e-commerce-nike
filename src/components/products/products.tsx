'use client'
import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'



const productVariants: Variants = {
  offscreen : {
    y:300
  },
  offscreenMid:{
    y:120
  },
  onscreen: {
    y:0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  },
  onscreen2 : {
    y:0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
}

const lirysVariants: Variants = {
  offscreen : {
    x:0
  },
  offscreenAnimation:{
    y:120
  },
  onscreen: {
    x:-390,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

const Products = () => {

  const handleViewPort = (leave: any) => {
    leave
  }
  

  return (
    <>
    <main className="overflow-x-auto h-screen pt-28 overflow-y-hidden">

    <motion.h2 
    initial="offscreen" 
    whileInView="onscreen" 
    variants={lirysVariants} 
    className='text-white text-5xl text-center pb-16 font-bold antialiased'>
      WRITE THE FUTURE 
    </motion.h2>

    <div className='grid grid-cols-2 grid-rows-2 items-center gap-12'>
      
    
    <Link href="/shirts" className="col-start-1 row-span-3 justify-self-end self-baseline h-[600px] relative">
      <motion.div   initial="offscreen"
                    whileInView="onscreen2"
                    variants={productVariants}
                    onViewportLeave={handleViewPort}
      >
       <Image 
        src="/remeraNike.webp"
        alt="remera"
        width={600}
        height={600}
        className='object-cover h-[605px] hover:transition-all hover:scale-105'
        />
      </motion.div>
    </Link>  
    
    <motion.div  initial="offscreen"
                 whileInView="onscreen"
                 variants={productVariants}
                 onViewportLeave={handleViewPort}>
                 
    <Link href="/accessories" className=" relative items-center self-end h-[300px]">
        <Image 
        src="/mochilanike.webp"
        alt="mochila"
        width={500} 
        height={500}
        className='hover:transition-all hover:scale-105'
        />
    </Link>

    </motion.div>

    <motion.div initial="offscreenMid"
                whileInView="onscreen"
                variants={productVariants}
                onViewportLeave={handleViewPort}
                >

    <Link href="/shoes" className="items-center relative self-start h-[300px]">
        <Image 
        src="/zapatillasnike.webp"
        alt="shoes"
        width={500}
        height={500}
        className='hover:transition-all hover:scale-105'
        />
    </Link>
    </motion.div>
       
    </div>
    
    

    </main>
    </>
  )
}

export default Products