'use client'
import { GetuserOrder } from '@/functions/Order/GetOrderByID'
import React, { useEffect, useState } from 'react'
import UserOrder from '@/components/Order/UserOrder'
import { useAppContext } from '@/utils/Context'
import { Order } from '@/utils/OrderInterface'
import { GetAllOrders } from '@/functions/Order/GetAllOrders'
import { useUser } from '@clerk/nextjs'

const MyOrders = () => {
  const { user, isLoaded, isSignedIn } = useUser()
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      if (
        user?.primaryEmailAddress?.emailAddress ===
        'hamzahussain14.hh@gmail.com'
      ) {
        // User is allowed
      } else {
        // Redirect or show an error message
        window.location.href = '/no-access'
      }
    } else if (!isSignedIn) {
      window.location.href = '/sign-in'
    }
  }, [isLoaded, isSignedIn, user])
  const [orders, setOrders] = useState([])
  const { loading, setLoading } = useAppContext()
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
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        ALL Orders
      </h1>
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
  )
}

export default MyOrders
