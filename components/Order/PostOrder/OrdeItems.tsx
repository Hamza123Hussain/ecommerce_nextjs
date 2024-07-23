'use client'
import React from 'react'

interface OrderDetailsProps {
  label: string
  value: string
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <span className="font-semibold text-gray-600">{label}</span>
      <span className="text-gray-900">{value}</span>
    </div>
  )
}

export default OrderDetails
