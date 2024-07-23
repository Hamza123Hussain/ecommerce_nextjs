'use client'
import React from 'react'
import { Product } from '@/utils/ProductInterface'

interface OrderSummaryProps {
  cart: Product[]
}

const OrderSum: React.FC<OrderSummaryProps> = ({ cart }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)
  const tax = (totalPrice * 0.16).toFixed(2)
  const shipping = 250

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-center">Order Summary</h3>
      <div className="flex justify-between mb-2">
        <span className="font-bold">Total Items</span>
        <span>{totalQuantity}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-bold">Subtotal</span>
        <span>Rs {totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-bold">Tax (16%)</span>
        <span>Rs {tax}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-bold">Shipping</span>
        <span>Rs {shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-lg font-bold border-t pt-2">
        <span>Total</span>
        <span>Rs {(totalPrice + parseFloat(tax) + shipping).toFixed(2)}</span>
      </div>
    </div>
  )
}

export default OrderSum
