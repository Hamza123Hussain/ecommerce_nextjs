'use client'
import { getdata } from '@/functions/Product/Fetch'
import { Product } from '@/utils/ProductInterface'
import React, { useEffect, useState } from 'react'

const GetProducts = () => {
  const [productdata, setProduct] = useState<any>([])
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
          </div>
        )
      })}
    </div>
  )
}

export default GetProducts
/**category
: 
"Formal Shirt"
created_at
: 
"2024-07-14T22:22:57.242979"
description
: 
"hamjanjnjdbdbybdyb"
id
: 
"ea986ae3-2e71-40ff-8383-2a45e4a7dc7f"
image_url
: 
"https://st1.bollywoodlife.com/wp-content/uploads/2023/12/3-47.png?impolicy=Medium_Widthonly&w=400&h=711"
name
: 
"Hamza Hussain"
price
: 
20
stock
: 
20
updated_at
: 
"2024-07-14T22:22:57.242979" */
