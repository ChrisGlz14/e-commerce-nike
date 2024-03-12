'use client'
import Image from 'next/image';
import React from 'react'

interface SideCartSectionProps {
  menuCartShow: boolean;
  setMenuCartShow: React.Dispatch<React.SetStateAction<boolean>>;
}
  
const SideCartSection: React.FC<SideCartSectionProps> = ({menuCartShow, setMenuCartShow}) => {



  return (
    <main className={`h-screen ${menuCartShow ? 'translate-x-0' : 'translate-x-full'} w-2/6 rounded-md bg-white fixed right-0 top-20 z-50 p-10`}>
        <h2 className='text-center text-black'>Cart</h2>
        <section className='flex mt-10'>
            <Image src="/close.svg" alt="close" width={120} height={120} className=''/>
            <p className='text-black P-2 ml-2 flex-grow'>precio</p>
            <p className='text-black P-2 ml-2 flex-grow'>cantidad</p>
        </section>
        <button 
        onClick={() => setMenuCartShow(!menuCartShow)} 
        className="toggle-cart-btn text-black text-center">
          CERRAR
        </button>
    </main>
  )
}

export default SideCartSection