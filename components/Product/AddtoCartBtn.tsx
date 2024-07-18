'use client'
import { useAppContext } from '@/utils/Context'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

const AddtoCartBtn = ({ quantity }: any) => {
  const { addToCart, increment, decrement } = useAppContext()

  return (
    <div>
      {quantity === 0 ? (
        <button
          onClick={addToCart}
          className="bg-blue-600 p-4 text-white rounded-md"
        >
          ADD TO CART
        </button>
      ) : (
        <div className="flex items-center justify-center space-x-4 p-4 bg-white border rounded-lg shadow-md">
          <button
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
            onClick={decrement}
          >
            <Minus size={16} />
          </button>
          <button className="bg-blue-600 text-white p-4 rounded-md flex items-center justify-center">
            {quantity}
          </button>
          <button
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
            onClick={increment}
          >
            <Plus size={16} />
          </button>
        </div>
      )}
    </div>
  )
}

export default AddtoCartBtn
