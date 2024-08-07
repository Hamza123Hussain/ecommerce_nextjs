'use client'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/utils/Context'
import OrderItem from './OrderItem'
import OrderSummary from './OrderSummary'
import { Product } from '@/utils/ProductInterface'
import { motion } from 'framer-motion'
import UserDetailsComponent from './UserDetails'
import GoBackButton from '../User/GoBack'
import CustomAlert from '../Alert'
import { useRouter } from 'next/navigation'

const OrderPage = () => {
  const Router = useRouter()
  const [alert, setAlert] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)
  const { cart, userDetail } = useAppContext()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Return null until client-side rendering is confirmed
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {alert && (
        <CustomAlert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      <GoBackButton />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl mt-6"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Order Details
        </h2>
        <UserDetailsComponent userDetail={userDetail} />
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Cart Details</h3>
          {cart.map((item: Product, index: number) => (
            <OrderItem key={index} item={item} />
          ))}
        </div>
        <OrderSummary />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => Router.push('/Payment')}
          className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-transform duration-200"
        >
          Place Order
        </motion.button>
      </motion.div>
    </div>
  )
}

export default OrderPage
