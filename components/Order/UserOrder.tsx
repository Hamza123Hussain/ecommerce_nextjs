'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const UserOrder = ({ order }: { order: any }) => {
  const Router = useRouter()
  return (
    <div
      key={order.id}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
    >
      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-500">Order ID:</p>
        <p className="text-sm font-medium text-gray-800">{order.id}</p>
      </div>
      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-500">User Name:</p>
        <p className="text-lg font-semibold text-gray-800">{order.name}</p>
      </div>
      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-500">Total Price:</p>
        <p className="text-xl font-bold text-gray-800">Rs {order.totalprice}</p>
      </div>
      <button
        onClick={() => Router.push(`/PostOrder/${order.id}`)}
        className="w-full py-2 bg-green-500 text-white rounded-lg font-semibold text-lg hover:bg-green-400 transition-transform duration-200"
      >
        Show Complete Order
      </button>
    </div>
  )
}

export default UserOrder
