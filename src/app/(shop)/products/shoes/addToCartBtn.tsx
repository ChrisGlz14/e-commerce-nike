'use client'

import { useCartStore } from '@/store/cart/cart-store';
import {useState} from 'react';



export default function AddToCartBtn({ productId, className }: { productId: string; className: string }) {
  const [quantity, setQuantity] = useState(1);

  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="place-self-end w-full mt-6">
      <button onClick ={() => addItem()} className={className}>
        Agregar al carrito
      </button>
    </div>
  );
}
