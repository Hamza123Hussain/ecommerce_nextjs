'use client'
import CustomAlert from '@/components/Alert'
import OrderDetails from '@/components/Order/PostOrder/OrdeItems'
import OrderSum from '@/components/Order/PostOrder/Ordersummary'
import UserDetails from '@/components/Order/PostOrder/UserDetails'
import { GetOrder } from '@/functions/Order/GetOrder'
import { SendEmail } from '@/functions/SendOrderEmail'
import { Product } from '@/utils/ProductInterface'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

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
          data.email || '',
          data.name || '',
          data.name || '',
          data.cart,
          data.total || 0,
          data.address || '',
          data.paymentmethod || '',
          'ORDER Placed Successfully'
        )

        if (Flag) {
          toast.success('EMAIL SENT')
        }
      }
      /***{
    "id": "fba5fdf0-7e2d-4874-91b4-4fe2d7600baf",
    "cart": [
        {
            "id": "d91f39c9-1ff7-449f-a4dd-d8e5b0740a82",
            "name": "phone",
            "price": 200,
            "stock": 205,
            "category": "cutie",
            "quantity": 1,
            "image_url": "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-a155fzygpkd/gallery/pk-galaxy-a15-sm-a155-sm-a155fzygpkd-thumb-539360539",
            "created_at": "2024-07-21T22:43:50.563",
            "updated_at": "2024-08-03T15:40:35.448",
            "description": "phone"
        }
    ],
    "totalprice": 200,
    "totalquantity": 1,
    "tax": 32,
    "shipping": 250,
    "total": 482,
    "name": "Hamza Hussain",
    "email": "zain2007@gmail.com",
    "address": "street 31 phase 3 43-w dha lahore",
    "city": "lahore",
    "state": "punjab",
    "country": "Pakistan",
    "zipcode": "54000",
    "created_at": "2024-08-04T10:18:15.007+00:00",
    "userid": "user_2k9C1tBEIXnBMAsjEgVHHrIxvRi",
    "phone": null,
    "paymentmethod": "cash"
} */
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
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      {alert && (
        <CustomAlert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      <div className="flex justify-start items-start space-y-2 flex-col mb-8">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          Order #{params.id}
        </h1>
        <p className="text-2xl leading-6 pl-2 text-gray-600">
          {getCurrentDate()}
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
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
          <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800 mb-4">
              Payment Method
            </h3>
            <p className="text-gray-700">{orderData.paymentmethod}</p>
          </div>
        </div>
        <div className="col-span-1 space-y-6">
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
