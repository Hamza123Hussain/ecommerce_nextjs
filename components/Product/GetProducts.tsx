'use client'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/utils/Context'
import { Product } from '@/utils/ProductInterface'
import { getdata } from '@/functions/Product/Fetch'
import { useRouter } from 'next/navigation'

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
  const Router = useRouter()

  useEffect(() => {
    fetchme()
  }, [])

  if (loading) {
    return <div>Loading...</div> // Display loading indicator while fetching data
  }

  return (
    <div className="grid grid-cols-2 justify-center items-center gap-10 p-4">
      {products?.map((productData: Product) => (
        <div key={productData.id}>
          <div className=" flex flex-col ">
            <img
              onClick={() => Router.push(`/Product/${productData.id}`)}
              src={productData.image_url}
              alt={productData.name}
              className=" rounded-lg  hover:shadow-md hover:shadow-black"
            />
            <h1 className=" text-xl mt-5 text-slate-800 font-extrabold">
              {productData.name}
            </h1>
            <div className=" flex flex-col p-2">
              {' '}
              <h1 className=" text-sm text-gray-700">Description</h1>
              <p className=" text-gray-500 text-xs p-2">
                {productData.description}
              </p>
            </div>

            <div className=" flex gap-2 justify-end p-2  items-center">
              <h1 className=" text-gray-700 font-bold text-sm">Price: </h1>
              <h5 className=" text-gray-950 font-bold">
                Rs {productData.price}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GetProducts
