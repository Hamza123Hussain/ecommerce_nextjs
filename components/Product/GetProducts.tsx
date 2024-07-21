'use client'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/utils/Context'
import { Product } from '@/utils/ProductInterface'
import { getdata } from '@/functions/Product/Fetch'
import ProductCard from './ProductCard'

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
    return <div>Loading...</div> // Display loading indicator while fetching data
  }

  return (
    <div className="grid grid-cols-2 justify-center items-center gap-10 p-4">
      {products?.map((element: Product) => (
        <div key={element.id}>
          <ProductCard productData={element} />
        </div>
      ))}
    </div>
  )
}

export default GetProducts
