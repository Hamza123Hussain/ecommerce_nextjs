'use client'
import { getdatabyid } from '@/functions/Product/ProductbyId'
import { Product } from '@/utils/ProductInterface'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface PageProps {
  params: {
    id: string
  }
}

const Page: React.FC<PageProps> = ({ params }) => {
  const Router = useRouter()
  const [Productdata, setdata] = useState<Product>()
  const fetcme = async () => {
    try {
      const data: Product = await getdatabyid(params.id)
      console.log(data)
      setdata(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetcme()
  }, [])
  return (
    <div className=" flex flex-col gap-10 justify-center items-center p-6 border-2 rounded-lg">
      <h5 onClick={() => Router.back()}>GO BACK</h5>
      <img src={Productdata?.image_url} alt={Productdata?.name} />
      <h1>{Productdata?.name}</h1>
      <p>{Productdata?.description}</p>
      <h5>{Productdata?.price}</h5>
      <button className=" bg-blue-600 p-4">ADD TO CART </button>
    </div>
  )
}

export default Page
