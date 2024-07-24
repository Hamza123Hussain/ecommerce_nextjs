'use client'
import OrderSum from '@/components/Order/PostOrder/Ordersummary'
import UserDetails from '@/components/Order/PostOrder/UserDetails'
import { useAppContext } from '@/utils/Context'
import { Product } from '@/utils/ProductInterface'
import React from 'react'

const Ordersum3 = () => {
  const getCurrentDate = () => {
    return new Date().toLocaleDateString()
  }
  const { cart } = useAppContext()
  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl  font-semibold leading-7 lg:leading-9  text-gray-800">
          Order #13432
        </h1>
        <p className=" text-2xl leading-6 pl-2 text-gray-600">
          {getCurrentDate()}
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
              Customer’s Cart
            </p>

            {cart.map((item: Product) => (
              <div
                key={item.id}
                className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "
              >
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    className="w-full hidden md:block"
                    src={item.image_url}
                    alt="dress"
                  />
                  <img
                    className="w-full md:hidden"
                    src={item.image_url}
                    alt="dress"
                  />
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
              </div>
            ))}
          </div>
          {/***order sum */}
          <OrderSum />
        </div>
        {/* <UserDetails /> */} <UserDetails />
      </div>
    </div>
  )
}

export default Ordersum3
