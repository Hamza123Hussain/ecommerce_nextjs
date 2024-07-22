'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
const CartDetails = ({
  totalPrice,
  shipping,
  tax,
  quantity,
}: {
  totalPrice: number
  shipping: number
  tax: number
  quantity: number
}) => {
  const Router = useRouter()
  return (
    <div className="w-full lg:w-1/3 bg-gray-100 p-4  mb-2 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
        Order Summary
      </h2>
      <div className="flex justify-between mb-2">
        <span>Total Products </span>
        <span>{quantity}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>{totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>Rs {shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Tax</span>
        <span>Rs {tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2 font-bold">
        <span>Total</span>
        <span>Rs {(tax + totalPrice + shipping).toFixed(2)}</span>
      </div>
      <button
        onClick={() => Router.push('/UserDetails')}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Checkout
      </button>
    </div>
  )
}

export default CartDetails
