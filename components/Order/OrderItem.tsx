'use client'
import { Product } from '@/utils/ProductInterface'
import React from 'react'

interface OrderItemProps {
  item: Product
}

const OrderItem: React.FC<OrderItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row items-center border p-6 rounded-lg mb-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
      <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
        <img
          src={item.image_url}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 md:ml-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-lg text-gray-600">Quantity: {item.quantity}</p>
          <p className="text-lg text-gray-600">Price: Rs{item.price}</p>
        </div>
        <p className="text-lg font-semibold text-gray-800 mt-2">
          Total: Rs{item.price * item.quantity}
        </p>
      </div>
    </div>
  )
}

export default OrderItem
