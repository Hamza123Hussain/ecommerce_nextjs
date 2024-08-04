'use client'
import { Product } from '@/utils/ProductInterface'
import React from 'react'

const OrderDetails = ({ item }: { item: Product }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-col border-2 rounded-lg p-2 border-gray-100">
        <div className="flex justify-between py-4 px-2">
          <span className="font-semibold text-gray-800">Product:</span>
          <span className="text-gray-800 flex items-center space-x-4">
            <img
              className="w-16 h-16 object-cover"
              src={item.image_url}
              alt="product"
            />
            <span>{item.name}</span>
          </span>
        </div>
        <div className="flex justify-between py-4 px-2">
          <span className="font-semibold text-gray-800">Price:</span>
          <span className="text-gray-800">Rs{item.price}</span>
        </div>
        <div className="flex justify-between py-4 px-2">
          <span className="font-semibold text-gray-800">Quantity:</span>
          <span className="text-gray-800">{item.quantity}</span>
        </div>
        <div className="flex justify-between py-4 px-2 border-t border-gray-200">
          <span className="font-semibold text-gray-800">Total:</span>
          <span className="text-gray-800">Rs{item.quantity * item.price}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
