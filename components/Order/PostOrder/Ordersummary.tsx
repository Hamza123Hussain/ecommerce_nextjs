'use client'
import React from 'react'

const OrderSum = ({
  shipping,
  total,
  totalprice,
  tax,
}: {
  shipping: number
  tax: number
  total: number
  totalprice: number
}) => {
  return (
    <div className="bg-white p-8 md:p-10 xl:p-12 flex flex-col rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl">
      <h3 className="text-2xl font-bold leading-7 text-gray-900 mb-6">
        Order Summary
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-base leading-4 text-gray-800">Subtotal</p>
          <p className="text-base leading-4 text-gray-600">Rs{totalprice}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base leading-4 text-gray-800">Shipping</p>
          <p className="text-base leading-4 text-gray-600">Rs{shipping}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base leading-4 text-gray-800">Tax</p>
          <p className="text-base leading-4 text-gray-600">Rs{tax}</p>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center font-bold text-lg">
            <p className="text-gray-800">Total</p>
            <p className="text-gray-900">Rs{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSum
