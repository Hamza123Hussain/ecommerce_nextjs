'use client'
import useCartActions from '@/functions/Product/Quantity/CustomQuantityHook'
import { Product } from '@/utils/ProductInterface'
import { Trash } from 'lucide-react'
import React from 'react'

const Cartitem = ({ item }: { item: Product }) => {
  const { removeFromCart } = useCartActions()
  return (
    <>
      <img
        src={item.image_url}
        alt={item.name}
        className="w-full md:w-20 h-20 object-cover"
      />
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p>Quantity: {item.quantity}</p>
        <p>Price: Rs{item.price}</p>
        <p>Total Price: Rs{item.price * item.quantity}</p>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-600 hover:text-red-800"
      >
        <Trash size={20} />
      </button>
    </>
  )
}

export default Cartitem
