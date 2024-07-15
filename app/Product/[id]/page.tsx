'use client'
import { getdatabyid } from '@/functions/Product/ProductbyId'
import { useAppContext } from '@/utils/Context'
import { Product } from '@/utils/ProductInterface'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface PageProps {
  params: {
    id: string
  }
}

const ProductPage = ({ params }: PageProps) => {
  const { setCart, cart } = useAppContext()
  const Router = useRouter()
  const [Productdata, setdata] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetcme = async () => {
      try {
        const data: Product = await getdatabyid(params.id)
        console.log(data)
        setdata(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetcme()
  }, [params.id])

  const Addtocart = () => {
    if (Productdata) {
      alert('ADDED TO CART')
      setCart((prev: Product[]) => [...prev, Productdata])
      console.log(cart)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center p-6 border-2 rounded-lg">
      <h5 onClick={() => Router.back()}>GO BACK</h5>
      {Productdata && (
        <>
          <img src={Productdata.image_url} alt={Productdata.name} />
          <h1>{Productdata.name}</h1>
          <p>{Productdata.description}</p>
          <h5>{Productdata.price}</h5>
          <button onClick={Addtocart} className="bg-blue-600 p-4">
            ADD TO CART
          </button>
        </>
      )}
    </div>
  )
}

export default ProductPage
