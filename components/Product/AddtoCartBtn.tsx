'use client'
import React, { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { Product } from '@/utils/ProductInterface'
import useCartActions from '@/functions/Quantity/CustomQuantityHook'
import { useAppContext } from '@/utils/Context'

interface AddtoCartBtnProps {
  product: Product
  onQuantityChange: (newQuantity: number) => void
  onstock: (newQuantity: number) => void
}

const AddtoCartBtn: React.FC<AddtoCartBtnProps> = ({
  product,
  onQuantityChange,
  onstock,
}) => {
  const { addToCart, increment, decrement } = useCartActions()
  const { setcartcount } = useAppContext()

  const handleAddToCart = async () => {
    addToCart(product)

    onQuantityChange(1) // Set initial quantity to 1 when adding to cart}
    onstock(product.stock - 1)
  }

  const handleIncrement = () => {
    increment(product.id)
    onQuantityChange(product.quantity + 1)
    onstock(product.stock - 1)
  }

  const handleDecrement = () => {
    decrement(product.id)
    onQuantityChange(product.quantity - 1)
    onstock(product.stock + 1)
  }

  return (
    <div className="mt-4">
      {product.quantity === 0 ? (
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
        >
          <ShoppingCart className="mr-2" size={20} />
          <span className="font-semibold">Add to Cart</span>
        </button>
      ) : (
        <div className="flex items-center justify-center space-x-4 p-4 bg-white border rounded-lg shadow-md transition-all duration-200">
          <button
            className="flex items-center justify-center bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-all duration-200"
            onClick={handleDecrement}
          >
            <Minus size={20} />
          </button>
          <span className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
            {product.quantity}
          </span>
          <button
            className="flex items-center justify-center bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-all duration-200"
            onClick={handleIncrement}
          >
            <Plus size={20} />
          </button>
        </div>
      )}
    </div>
  )
}

export default AddtoCartBtn
