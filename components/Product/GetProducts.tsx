'use client'
import React, { useEffect } from 'react'
import { useAppContext } from '@/utils/Context'
import { Product } from '@/utils/ProductInterface'
import { getdata } from '@/functions/Product/Fetch'
import ProductCard from './ProductCard'
import { useRouter } from 'next/navigation'

const GetProducts = () => {
  const { products, setProducts } = useAppContext()
  const Router = useRouter()
  const fetchme = async () => {
    try {
      const data: Product = await getdata()
      setProducts(data)
      localStorage.setItem('products', JSON.stringify(data))
    } catch (error) {
      console.error('Failed to fetch products:', error)
    }
  }

  useEffect(() => {
    fetchme()
  }, [])
  console.log('ALL PRODUCTS', products)

  return (
    <div className="grid grid-cols-2 justify-center items-center gap-10 p-4">
      {products?.map((element: any) => (
        <div key={element.id}>
          <div className=" flex flex-col ">
            <img
              onClick={() => Router.push(`/Product/${element.id}`)}
              src={element.image_url}
              alt={element.name}
              className=" rounded-lg  hover:shadow-md hover:shadow-black"
            />
            <h1 className=" text-xl mt-5 text-slate-800 font-extrabold">
              {element.name}
            </h1>
            <div className=" flex flex-col p-2">
              {' '}
              <h1 className=" text-sm text-gray-700">Description</h1>
              <p className=" text-gray-500 text-xs p-2">
                {element.description}
              </p>
            </div>

            <div className=" flex gap-2 justify-end p-2  items-center">
              <h1 className=" text-gray-700 font-bold text-sm">Price: </h1>
              <h5 className=" text-gray-950 font-bold">Rs {element.price}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GetProducts
