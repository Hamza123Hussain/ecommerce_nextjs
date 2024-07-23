'use client'
import { useAppContext } from '@/utils/Context'
import { Product } from '@/utils/ProductInterface'
import React from 'react'

const OrderSummary: React.FC = () => {
  const { cart } = useAppContext()

  const totalPrice = cart.reduce(
    (total: number, item: Product) => total + item.price * item.quantity,
    0
  )
  const totalQuantity = cart.reduce(
    (total: number, item: Product) => total + item.quantity,
    0
  )
  const shipping = 250
  const tax = (totalPrice * 16) / 100
  const grandTotal = totalPrice + shipping + tax

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-bold mb-4 text-gray-700">Order Summary</h3>
      <div className="flex justify-between mb-2">
        <span>Total Quantity</span>
        <span>{totalQuantity}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Total Price</span>
        <span>Rs{totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>Rs{shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Tax</span>
        <span>Rs{tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2 font-bold">
        <span>Grand Total</span>
        <span>Rs{grandTotal.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default OrderSummary