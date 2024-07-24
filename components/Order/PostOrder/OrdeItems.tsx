'use client'
import { Product } from '@/utils/ProductInterface'
import React from 'react'

interface OrderDetailsProps {
  label: string
  value: string
}

const OrderDetails = ({ item }: { item: Product }) => {
  return (
    <>
      <div className="pb-4 md:pb-8 w-full md:w-40">
        <img
          className="w-full hidden md:block"
          src={item.image_url}
          alt="product"
        />
        <img className="w-full md:hidden" src={item.image_url} alt="product" />
      </div>
      <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
        <div className="w-full flex flex-col justify-start items-start space-y-8">
          <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
            {item.name}
          </h3>
        </div>
        <div className="flex justify-between space-x-8 items-start w-full">
          <p className="text-base xl:text-lg leading-6">
            Rs{item.price}
            <span className="text-red-300 line-through"> $45.00</span>
          </p>
          <p className="text-base xl:text-lg leading-6 text-gray-800">
            {item.quantity}
          </p>
          <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
            Rs{item.quantity * item.price}
          </p>
        </div>
      </div>
    </>
  )
}

export default OrderDetails
