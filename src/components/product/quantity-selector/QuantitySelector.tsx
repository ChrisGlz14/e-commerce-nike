import React, { useState } from 'react'
import '@/app/globals.css'
const QuantitySelector = () => {

    const [quantity, setQuantity] = useState(1)

    
    if (quantity < 1) {
        setQuantity(1)
    } else if (quantity > 5) {
      setQuantity(5)
    }

  return (   
    <div className='mt-5'>
        <button onClick={() => setQuantity(quantity - 1)} className='w-7 bg-white hover:bg-slate-300 text-black rounded-sm px-2 rounded-l-full p-2 text-xl'>-</button>
        <input type="number" name="" value={quantity} id=""  className='w-11 text-black outline-none px-2 text-center p-2 text-xl'/>
        <button onClick={() => setQuantity(quantity + 1)} className='w-7 bg-white hover:bg-slate-300 text-black rounded-r-full px-2 p-2 text-xl'>+</button>
    </div>
  )
}

export default QuantitySelector
