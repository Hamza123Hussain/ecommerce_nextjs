'use client'
import OrderDetails from '@/components/Order/PostOrder/OrdeItems'
import OrderSum from '@/components/Order/PostOrder/Ordersummary'
import UserDetails from '@/components/Order/PostOrder/UserDetails'
import { GetOrder } from '@/functions/Order/GetOrder'
import { Product } from '@/utils/ProductInterface'
import React, { useEffect, useState } from 'react'

const PostOrder = ({ params }: { params: any }) => {
  const [orderData, setOrderData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  console.log(params.id)

  const fetchData = async () => {
    try {
      const data = await GetOrder(params.id)
      console.log(data)
      setOrderData(data)
      setIsLoading(false)
    } catch (error) {
      console.log('Error at front', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const getCurrentDate = () => {
    return new Date().toLocaleDateString()
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl  font-semibold leading-7 lg:leading-9  text-gray-800">
          Order #{params.id}
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

            {orderData.cart.map((item: Product) => (
              <div
                key={item.id}
                className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "
              >
                <OrderDetails item={item} />
              </div>
            ))}
          </div>
          <OrderSum
            shipping={orderData.shipping}
            total={orderData.total}
            totalprice={orderData.totalprice}
            tax={orderData.tax}
          />
        </div>
        <UserDetails
          name={orderData.name}
          email={orderData.email}
          city={orderData.city}
          state={orderData.state}
          country={orderData.country}
          address={orderData.address}
          zipcode={orderData.zipcode}
          phone={orderData.phone}
        />
      </div>
    </div>
  )
}

export default PostOrder
