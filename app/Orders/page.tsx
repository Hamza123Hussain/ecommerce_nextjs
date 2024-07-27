'use client'
import { GetuserOrder } from '@/functions/Order/GetOrderByID'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import UserOrder from '@/components/Order/UserOrder'
import { useAppContext } from '@/utils/Context'

const MyOrders = () => {
  const { user } = useUser()
  const [orders, setOrders] = useState([])
  const { loading, setLoading } = useAppContext()
  const GetData = async () => {
    if (user?.id) {
      const data = await GetuserOrder(user.id)
      if (data) {
        setOrders(data)
        console.log('USER ORDER ', data)
        setLoading(false)
      }
    } else {
      console.log('User ID is not available')
      setLoading(false)
    }
  }

  useEffect(() => {
    GetData()
  }, [user?.id])

  if (loading) {
    return (
      <div className=" min-h-screen flex justify-center items-center">
        <div className="loader"></div>
      </div>
    )
  }
  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        My Orders
      </h1>
      {orders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orders.map((order: any) => (
            <UserOrder key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-700">No orders found.</p>
      )}
    </div>
  )
}

export default MyOrders
