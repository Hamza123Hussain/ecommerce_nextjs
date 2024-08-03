'use client'
import TotalMoney from '@/components/Order/TotalRevenue'
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
        <TotalMoney totalRevenue={totalRevenue} />
      )}
    </div>
  )
}

export default TotalRevenue
