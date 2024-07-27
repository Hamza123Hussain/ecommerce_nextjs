'use client'
import useCartActions from '@/functions/Quantity/CustomQuantityHook'
import { Product } from '@/utils/ProductInterface'
import { Minus, Plus, Trash } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'

const CartItems = ({ item }: { item: Product }) => {
  const { removeFromCart, increment, decrement } = useCartActions()

  const handleIncrement = () => {
    if (item.stock > 0) {
      increment(item.id)
    } else {
      toast.error('Item is out of stock')
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border p-4 rounded-lg mb-4 bg-white shadow-md">
      <div className="col-span-6 md:col-span-4 flex justify-center">
        <img
          src={item.image_url}
          alt={item.name}
          className="w-[30vh] h-[30vh] rounded-t-lg md:rounded-xl"
        />
      </div>
      <div className="col-span-6 md:col-span-3">
        <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
        <p className="text-gray-700">Price: Rs{item.price}</p>
        <p className="text-gray-700">
          Total Price: Rs{item.price * item.quantity}
        </p>
      </div>
      <div className="col-span-4 flex items-center justify-center md:justify-between">
        <div className="flex justify-center items-center">
          <button
            onClick={() => decrement(item.id)}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
          >
            <Minus size={16} />
          </button>
          <span className="mx-2 text-lg">{item.quantity}</span>
          <button
            onClick={handleIncrement}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-600 hover:text-red-800"
      >
        <Trash size={24} />
      </button>
    </div>
  )
}

export default CartItems
