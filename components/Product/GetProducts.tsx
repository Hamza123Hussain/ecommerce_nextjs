'use client'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/utils/Context'
import { Product } from '@/utils/ProductInterface'
import { getdata } from '@/functions/Product/Fetch'
import ProductCard from './ProductCard'
import HomeProduct from './HomeProduct'

const GetProducts = () => {
  const { products, setProducts } = useAppContext()
  const [loading, setLoading] = useState(true)

  const fetchme = async () => {
    try {
      const data = await getdata()
      setProducts(data)
      localStorage.setItem('products', JSON.stringify(data))
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
      <div className=" flex mt-52 justify-center items-center">
        <span className="loader"></span>
      </div>
    ) // Display loading indicator while fetching data
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
