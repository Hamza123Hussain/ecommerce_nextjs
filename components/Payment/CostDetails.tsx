import { useAppContext } from '@/utils/Context'
import React from 'react'

const CostDetails = () => {
  const { total, tax, shipping, sum } = useAppContext()
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Order Summary</h3>
      <div className="bg-gray-100 p-6 rounded-lg space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Subtotal</span>
          <span className="text-gray-900">Rs {total.totalprice}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Tax</span>
          <span className="text-gray-900">Rs{tax}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Shipping</span>
          <span className="text-gray-900">Rs {shipping}</span>
        </div>
        <div className="border-t border-gray-300 mt-4"></div>
        <div className="flex justify-between items-center font-bold text-lg">
          <span className="text-gray-800">Total</span>
          <span className="text-gray-900">{sum}</span>
        </div>
      </div>
    </>
  )
}

export default CostDetails
