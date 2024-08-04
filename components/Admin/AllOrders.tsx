'use client'
import { GetuserOrder } from '@/functions/Order/GetOrderByID'
import React, { useEffect, useState } from 'react'
import UserOrder from '@/components/Order/UserOrder'
import { useAppContext } from '@/utils/Context'
import { Order } from '@/utils/OrderInterface'
import { GetAllOrders } from '@/functions/Order/GetAllOrders'
import { ArrowLeftCircle } from 'lucide-react'

const MyOrders = () => {
  const [orders, setOrders] = useState([])
  const { loading, setLoading, index, setindex } = useAppContext()
  const GetData = async () => {
    const data = await GetAllOrders()
    if (data) {
      setOrders(data)
      console.log('USER ORDER ', data)
      setLoading(false)
    }
  }

  useEffect(() => {
    GetData()
  }, [])

  if (loading) {
    return (
      <div className=" min-h-screen flex justify-center items-center">
        <div className="loader"></div>
      </div>
    )
  }
  return (
    <>
      {' '}
      <div className="mt-10 flex justify-between items-center">
        <ArrowLeftCircle
          onClick={() => setindex(0)}
          size={35}
          className=" ml-10 cursor-pointer"
        />{' '}
        <h1 className="text-xl md:text-5xl font-bold text-gray-800">
          ALL Orders
        </h1>
        <div className="bg-transparent text-transparent">sas</div>
      </div>
      <div className="min-h-screen p-6 bg-white">
        {orders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orders.map((order: Order) => (
              <UserOrder key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-700">No orders found.</p>
        )}
      </div>
    </>
  )
}

export default MyOrders
