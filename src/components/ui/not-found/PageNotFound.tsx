import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const PageNotFound = () => {
  return (
    <div className='flex flex-col h-[800px] w-full justify-center items-center aling-middle'>
      <div className='text-center px-5 mx-5'>
        <h3 className='font-bold text-3xl'>Ups ...lo sentimos mucho</h3>
        <p className='font-bold text-3xl'>Página no encontrada</p>
        <span className='font-bold text-2xl'>Regresa al </span>
        <Link href='/'
        className='hover:underline transition-all text-2xl bg-white text-black rounded-sm p-1'
        >
          Inicio   
        </Link>
      </div>

      <div className='px-5 mx-5'>
        <Image 
          src="/404.png"
          alt="404"
          width={400}
          height={400}        
        />
        
      </div>
    </div>
  )
}

export default PageNotFound