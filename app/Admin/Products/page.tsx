'use client'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/utils/Context'
import { Product } from '@/utils/ProductInterface'
import { getdata } from '@/functions/Product/Fetch'
import AdminProduct from '@/components/Product/AdminProduct'

const GetProducts = () => {
  const [products, setProducts] = useState([])
  const { loading, setLoading } = useAppContext()

  const fetchme = async () => {
    try {
      const data = await getdata()
      setProducts(data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setLoading(false)
    }
  }
  console.log(products)
  useEffect(() => {
    fetchme()
  }, [])

  if (loading) {
    return (
      <div className=" flex min-h-screen justify-center items-center">
        <span className="loader"></span>
      </div>
    ) // Display loading indicator while fetching data
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-5 p-10 min-h-screen">
      {products?.map((productData: Product) => (
        <div key={productData.id}>
          <AdminProduct product={productData} />
        </div>
      ))}
    </div>
  )
}

export default GetProducts
