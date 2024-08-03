'use client'
import { GetALLRevenue } from '@/functions/Order/GettingRevenue'
import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

const TotalRevenue = () => {
  const [Revenue, setRevenue] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [totalRevenue, setTotalRevenue] = useState({
    Total: 0,
    Tax: 0,
    Shipping: 0,
    subtotal: 0,
  })

  const GetRevenue = async () => {
    try {
      const Money = await GetALLRevenue()
      if (Money) {
        setRevenue(Money)
        const calculatedRevenue = Money.reduce(
          (acc: any, product: any) => {
            acc.Total += product.totalprice
            acc.Tax += product.tax
            acc.Shipping += product.shipping
            acc.subtotal += product.total
            return acc
          },
          { Total: 0, Tax: 0, Shipping: 0, subtotal: 0 }
        )
        setTotalRevenue(calculatedRevenue)
      }
    } catch (error) {
      console.log('UNABLE TO GET REVENUE', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    GetRevenue()
  }, [])

  return (
    <div className="min-h-screen shadow-lg  flex flex-col items-center bg-white py-10">
      <h1 className="text-4xl font-bold mb-10">Total Revenue</h1>
      {loading ? (
        <ClipLoader size={50} color={'#123abc'} loading={loading} />
      ) : (
        <div className="w-full max-w-4xl bg-white rounded-lg p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-bold text-green-800">Total</h2>
              <p className="text-2xl font-semibold">
                {totalRevenue.Total.toFixed(2)}
              </p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-bold text-blue-800">Tax</h2>
              <p className="text-2xl font-semibold">
                {totalRevenue.Tax.toFixed(2)}
              </p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-bold text-yellow-800">Shipping</h2>
              <p className="text-2xl font-semibold">
                {totalRevenue.Shipping.toFixed(2)}
              </p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-bold text-purple-800">Subtotal</h2>
              <p className="text-2xl font-semibold">
                {totalRevenue.subtotal.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TotalRevenue
