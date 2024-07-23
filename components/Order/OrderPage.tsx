'use client'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/utils/Context'
import OrderItem from './OrderItem'

import OrderSummary from './OrderSummary'
import { Product } from '@/utils/ProductInterface'
import { motion } from 'framer-motion'
import UserDetailsComponent from './UserDetails'
import GoBackButton from '../User/GoBack'

const OrderPage: React.FC = () => {
  const { cart, userDetail, total } = useAppContext()
  const [isClient, setIsClient] = useState(false)

  const SubmitOrder = () => {
    console.log('CART', cart)
    console.log('User Data', userDetail)
    console.log('TOTAL', total)
  }
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Return null until client-side rendering is confirmed
  }

  console.log('User Details:', userDetail)
  console.log('Cart Items:', cart)

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col items-center p-4">
      <GoBackButton />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl mt-6"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          Order Details
        </h2>
        <UserDetailsComponent userDetail={userDetail} />
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">
            Cart Details
          </h3>
          {cart.map((item: Product, index: number) => (
            <OrderItem key={index} item={item} />
          ))}
        </div>
        <OrderSummary />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={SubmitOrder}
          className="mt-6 w-full py-3 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition-transform duration-200"
        >
          Place Order
        </motion.button>
      </motion.div>
    </div>
  )
}

export default OrderPage
