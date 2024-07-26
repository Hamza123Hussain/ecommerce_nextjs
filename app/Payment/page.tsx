'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card')

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center p-6">
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
            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Expiry Date"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            )}
            {paymentMethod === 'cash' && (
              <div className="text-lg text-gray-700">
                You have selected to pay by cash. Please prepare the exact
                amount.
              </div>
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Order Summary
            </h3>
            <div className="bg-gray-100 p-6 rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Subtotal</span>
                <span className="text-gray-900">$100.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tax</span>
                <span className="text-gray-900">$8.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Shipping</span>
                <span className="text-gray-900">$5.00</span>
              </div>
              <div className="border-t border-gray-300 mt-4"></div>
              <div className="flex justify-between items-center font-bold text-lg">
                <span className="text-gray-800">Total</span>
                <span className="text-gray-900">$113.00</span>
              </div>
            </div>
            <button className="w-full py-3 mt-6 bg-green-500 text-white rounded-lg font-semibold text-lg hover:bg-green-600 transition-transform duration-200">
              Confirm Payment
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default PaymentPage
