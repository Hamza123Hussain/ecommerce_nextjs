'use client'
import { getdata } from '@/functions/Product/Fetch'
import { Product } from '@/utils/ProductInterface'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const GetProducts = () => {
  const [productdata, setProduct] = useState<any>([])
  const Router = useRouter()
  const fetchme = async () => {
    const data: Product = await getdata()
    console.log(data)
    setProduct(data)
  }
  useEffect(() => {
    fetchme()
  }, [])

  return (
    <div className=" grid grid-cols-2 justify-center items-center gap-10 p-4">
      {productdata.map((element: Product, index: number) => {
        return (
          <div
            key={element.id}
            className=" flex flex-col gap-2 border-2 rounded-lg p-4 w-fit"
          >
            <img src={element.image_url} alt={element.name} className=" w-32" />

            <h1>{element.name}</h1>
            <h1>Rs {element.price}</h1>
            <button
              className=" bg-blue-600 rounded-lg p-4"
              onClick={() => Router.push(`/Product/${element.id}`)}
            >
              Add To Cart
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default GetProducts
