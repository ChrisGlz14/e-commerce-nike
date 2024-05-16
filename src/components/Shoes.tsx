import React from 'react'
import Image from 'next/image'
const Shoes = () => {
  return (
    <>
    <main className="overflow-x-auto h-screen pt-28 overflow-y-hidden">

    <h2 className='text-white text-5xl text-center pb-16'>WRITE THE FUTURE</h2>

    <div className='grid grid-cols-2 grid-rows-2 items-center gap-12'>
        <Image 
        src="/remeraNike.webp"
        alt="remera"
        width={600}
        height={800}
        style={{objectFit: "cover"}}
        className="col-start-1 row-span-3 justify-self-end self-baseline h-[648px] relative"
        />

    
        <Image 
        src="/mochilanike.webp"
        alt="mochila"
        width={500} 
        height={500}
        style={{objectFit: "cover"}}
        className=" relative items-center self-end h-[300px]"
        />

        <Image 
        src="/zapatillasnike.webp"
        alt="shoes"
        width={500}
        height={500}
        style={{objectFit: "cover"}}
        className=" items-center relative self-start h-[300px]"
        />
       
    </div>
    
    

    </main>
    </>
  )
}

export default Shoes