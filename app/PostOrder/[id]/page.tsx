'use client'
import CustomAlert from '@/components/Alert'
import OrderDetails from '@/components/Order/PostOrder/OrdeItems'
import OrderSum from '@/components/Order/PostOrder/Ordersummary'
import UserDetails from '@/components/Order/PostOrder/UserDetails'
import { GetOrder } from '@/functions/Order/GetOrder'
import { SendEmail } from '@/functions/SendOrderEmail'
import { Product } from '@/utils/ProductInterface'
import React, { useEffect, useState } from 'react'

const PostOrder = ({ params }: { params: any }) => {
  const [orderData, setOrderData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [alert, setAlert] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)

  const fetchData = async () => {
    try {
      const data = await GetOrder(params.id)
      setOrderData(data)
      setIsLoading(false)
      console.log('post order ', data)
      if (data) {
        const Flag = await SendEmail(
          data.id || '',
          data.email || '',
          data.name || '',
          data.name || '',
          data.cart,
          data.total || 0,
          data.address || '',
          data.paymentmethod || '',
          'ORDER Placed Successfully'
        )
      }
    } catch (error) {
      console.log('Error at front', error)
      setAlert({
        message: 'Failed to fetch order details. Please try again later.',
        type: 'error',
      })
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const getCurrentDate = () => {
    return new Date().toLocaleDateString()
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto dark:bg-white">
      {alert && (
        <CustomAlert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      <div className="flex justify-start items-start space-y-2 flex-col mb-8">
        <h1 className="text-sm lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          Order #{params.id}
        </h1>
        <p className="text-2xl leading-6 pl-2 text-gray-600">
          {getCurrentDate()}
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className=" p-6 rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800 mb-6">
              Customer’s Cart
            </p>
            {orderData.cart.map((item: Product) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 mb-4"
              >
                <OrderDetails item={item} />
              </div>
            ))}
          </div>
          <div className=" p-6 rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl mt-10">
            <h3 className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800 mb-4">
              Payment Method
            </h3>
            <p className="text-gray-700 text-xl capitalize">
              {orderData.paymentmethod}
            </p>
          </div>
        </div>
        <div className="col-span-1 space-y-6 ml-10">
          <UserDetails />
          <OrderSum
            shipping={orderData.shipping}
            total={orderData.total}
            totalprice={orderData.totalprice}
            tax={orderData.tax}
          />
        </div>
      </div>
    </div>
  )
}

export default PostOrder
