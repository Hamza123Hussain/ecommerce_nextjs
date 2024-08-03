'use client'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/utils/Context'
import { Product } from '@/utils/ProductInterface'
import { getdata } from '@/functions/Product/Fetch'
import HomeProduct from './HomeProduct'

const GetProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const { loading, setLoading } = useAppContext()

  const fetchme = async () => {
    setLoading(true)
    try {
      const data = await getdata()
      console.log('Fetched products:', data)
      setProducts(data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchme()
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <span className="loader"></span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-5 p-10 min-h-screen">
      {products?.map((productData: Product) => (
        <div key={productData.id}>
          <HomeProduct product={productData} />
        </div>
      ))}
    </div>
  )
}

export default GetProducts
