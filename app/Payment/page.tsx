'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '@/utils/Context'
import { useRouter } from 'next/navigation'
import { placeOrder } from '@/functions/Order/Create'
import { useUser } from '@clerk/nextjs'
import CustomAlert from '@/components/Alert'
import CardDetails from '@/components/Payment/CardDetails'
import CostDetails from '@/components/Payment/CostDetails'

const PaymentPage = () => {
  const { total, paymentMethod, setPaymentMethod, setCart, cart, userDetail } =
    useAppContext()
  const { user } = useUser()
  const [alert, setAlert] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)
  const SubmitOrder = async () => {
    const Data = await placeOrder(
      cart,
      total,
      userDetail,
      paymentMethod,
      user?.id
    )
    if (Data) {
      setAlert({
        message: 'Payment successfull !',
        type: 'success',
      })
      setCart([])
      Router.push(`/PostOrder/${Data}`)
    }
  }
  const Router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center p-6">
      {alert && (
        <CustomAlert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl relative"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          Payment Information
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <button
                className={`w-full py-3 rounded-lg font-semibold text-lg transition-transform duration-200 ${
                  paymentMethod === 'card'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setPaymentMethod('card')}
              >
                Pay by Card
              </button>
              <button
                className={`w-full py-3 rounded-lg font-semibold text-lg transition-transform duration-200 ml-4 ${
                  paymentMethod === 'cash'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setPaymentMethod('cash')}
              >
                Pay by Cash
              </button>
            </div>
            {paymentMethod === 'card' && <CardDetails />}
            {paymentMethod === 'cash' && (
              <div className="text-lg text-gray-700">
                You have selected to pay by cash. Please prepare the exact
                amount.
              </div>
            )}
          </div>
          <div>
            {' '}
            <CostDetails />{' '}
            <button
              onClick={SubmitOrder}
              className="w-full py-3 mt-6 bg-green-500 text-white rounded-lg font-semibold text-lg hover:bg-green-600 transition-transform duration-200"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default PaymentPage