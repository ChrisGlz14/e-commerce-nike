import type { Size } from '@/interfaces'
import clsx from 'clsx'

import React from 'react'

interface Props {
  selectedSize: Size
  availableSizes: Size[]
  allSizes: Size[]
}
const SizeSelector = ({selectedSize, availableSizes, allSizes}: Props) => {
  return (
    <div className='my-5'>
      <h3 className='font-bold '>Talles</h3>
      <div className='grid grid-cols-5 gap-2 mt-3'>

        {allSizes.map((size)=> (
          // here i will be a details for each size
          <button
            key={size}
            className={clsx('border-[1px] text-lg', {
              'hover:underline': availableSizes.includes(size),
              'hidden': !availableSizes.includes(size)
            })}
          >
            {size}
          </button>

        ))}



      </div>
    </div>
  )
}

// const SizeSelector = ({selectedSize, availableSizes, allSizes}: Props) => {
//   return (
//     <div className='my-5'>
//       <h3 className='font-bold '>Talles</h3>
//       <div className='grid grid-cols-5 gap-2 mt-3'>

//         {availableSizes.map((size)=> (
//           // here i will be a details for each size
//           <button key={size} className={
//             clsx(
//               'border-[1px] hover:underline text-lg',
//               {
//                 'underline':size === selectedSize,
                
//               } 
//             )
//           }>
//             {size}
//           </button>
//         ))}



//       </div>
//     </div>
//   )
// }



export default SizeSelector

