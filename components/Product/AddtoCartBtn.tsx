'use client'
import React from 'react'
import { Minus, Plus } from 'lucide-react'
import { Product } from '@/utils/ProductInterface'
import useCartActions from '@/functions/Product/Quantity/CustomQuantityHook'

interface AddtoCartBtnProps {
  product: Product
  onQuantityChange: (newQuantity: number) => void
}

const AddtoCartBtn: React.FC<AddtoCartBtnProps> = ({
  product,
  onQuantityChange,
}) => {
  const { addToCart, increment, decrement } = useCartActions()

  const handleAddToCart = () => {
    addToCart(product)
    onQuantityChange(1) // Set initial quantity to 1 when adding to cart
  }

  const handleIncrement = () => {
    increment(product.id)
    onQuantityChange(product.quantity + 1)
  }

  const handleDecrement = () => {
    decrement(product.id)
    onQuantityChange(product.quantity - 1)
  }

  return (
    <div>
      {product.quantity === 0 ? (
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 p-4 text-white rounded-md"
        >
          ADD TO CART
        </button>
      ) : (
        <div className="flex items-center justify-center space-x-4 p-4 bg-white border rounded-lg shadow-md">
          <button
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
            onClick={handleDecrement}
          >
            <Minus size={16} />
          </button>
          <button className="bg-blue-600 text-white p-4 rounded-md flex items-center justify-center">
            {product.quantity}
          </button>
          <button
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
            onClick={handleIncrement}
          >
            <Plus size={16} />
          </button>
        </div>
      )}
    </div>
  )
}

export default AddtoCartBtn
