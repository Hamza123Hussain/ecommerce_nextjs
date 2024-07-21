'use client'

import React from 'react'
import AddtoCartBtn from './AddtoCartBtn'
import { useRouter } from 'next/navigation'
import { Product } from '@/utils/ProductInterface'

const ProductCard = ({ productData }: { productData: Product }) => {
  const Router = useRouter()
  return (
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
        <p className=" text-gray-500 text-xs p-2">{productData.description}</p>
      </div>

      <div className=" flex gap-2 justify-end p-2  items-center">
        <h1 className=" text-gray-700 font-bold text-sm">Price: </h1>
        <h5 className=" text-gray-950 font-bold">Rs {productData.price}</h5>
      </div>
      <AddtoCartBtn product={productData} />
    </div>
  )
}

export default ProductCard
