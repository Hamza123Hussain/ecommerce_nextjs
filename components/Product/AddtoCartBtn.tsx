'use client'
import React from 'react'
import { Minus, Plus } from 'lucide-react'
import { Product } from '@/utils/ProductInterface'
import useCartActions from '@/functions/Product/Quantity/CustomQuantityHook'

interface AddtoCartBtnProps {
  product: Product
}

const AddtoCartBtn: React.FC<AddtoCartBtnProps> = ({ product }) => {
  const { addToCart, increment, decrement } = useCartActions()

  return (
    <div>
      {product.quantity === 0 ? (
        <button
          onClick={() => {
            console.log('Button clicked: ADD TO CART')
            addToCart(product)
          }}
          className="bg-blue-600 p-4 text-white rounded-md"
        >
          ADD TO CART
        </button>
      ) : (
        <div className="flex items-center justify-center space-x-4 p-4 bg-white border rounded-lg shadow-md">
          <button
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
            onClick={() => {
              console.log('Button clicked: DECREMENT')
              decrement(product.id)
            }}
          >
            <Minus size={16} />
          </button>
          <button className="bg-blue-600 text-white p-4 rounded-md flex items-center justify-center">
            {product.quantity}
          </button>
          <button
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
            onClick={() => {
              console.log('Button clicked: INCREMENT')
              increment(product.id)
            }}
          >
            <Plus size={16} />
          </button>
        </div>
      )}
    </div>
  )
}

export default AddtoCartBtn
