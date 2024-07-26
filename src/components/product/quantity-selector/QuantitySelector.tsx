import React, { useState } from 'react'
import '@/app/globals.css'


interface Props {
  quantity: number;
}
export const QuantitySelector = ({quantity}:Props) => {

  const [count, setCount] = useState(1);

    const onQuantityChanged = (value: number) => {
        const newCount = count + value;

        if (newCount < 1) {
            setCount(1);
        } else if (newCount > 5) {
            setCount(5);
        } else {
            setCount(newCount);
        }
    }


  return (   
    <div className='mt-5'>
        <button onClick={() => onQuantityChanged(-1)} className='w-7 bg-white hover:bg -slate-300 text-black rounded-sm px-2 rounded-l-full p-2 text-xl'>-</button>
        <span className='bg-white text-black outline-none justify-center px-7 p-2 text-xl inline-flex h-full w-7'>{count}</span>   
        <button onClick={() => onQuantityChanged (1)} className='w-7 bg-white hover:bg-slate-300 text-black rounded-r-full px-2 p-2 text-xl'>+</button>
    </div>
  )
}

export default QuantitySelector
