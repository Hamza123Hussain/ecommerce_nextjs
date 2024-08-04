'use client'
import TotalMoney from '@/components/Order/TotalRevenue'
import { GetALLRevenue } from '@/functions/Order/GettingRevenue'
import { useAppContext } from '@/utils/Context'
import { ArrowLeftCircle } from 'lucide-react'
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
  const { index, setindex } = useAppContext()
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
    <>
      {' '}
      <div className="mt-10 flex justify-between items-center">
        <ArrowLeftCircle
          onClick={() => setindex(0)}
          size={35}
          className=" ml-10 cursor-pointer"
        />{' '}
        <h1 className="text-xl md:text-5xl font-bold text-gray-800">
          Total Revenue
        </h1>
        <div className="bg-transparent text-transparent">sas</div>
      </div>
      <div className="min-h-screen shadow-lg  flex flex-col items-center bg-white py-10">
        {loading ? (
          <ClipLoader size={50} color={'#123abc'} loading={loading} />
        ) : (
          <TotalMoney totalRevenue={totalRevenue} />
        )}
      </div>
    </>
  )
}

export default TotalRevenue
