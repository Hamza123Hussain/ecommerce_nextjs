'use client'
import { useAppContext } from '@/utils/Context'
import { useRouter } from 'next/navigation'
import React from 'react'
const CartDetails = () => {
  const { total, tax, shipping, sum } = useAppContext()
  const Router = useRouter()
  return (
    <div
      className="w-full lg:w-1/3 npm install cors
 border-2 p-4  mb-2 rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
        Order Summary
      </h2>
      <div className="flex justify-between mb-2">
        <span>Total Products </span>
        <span>{total.totalquantity}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>{total.totalprice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>Rs {shipping}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Tax</span>
        <span>Rs {tax}</span>
      </div>
      <div className="flex justify-between mb-2 font-bold">
        <span>Total</span>
        <span>Rs {sum}</span>
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
