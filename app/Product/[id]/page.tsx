'use client'
import { getdatabyid } from '@/functions/Product/ProductbyId'
import { Decrement } from '@/functions/Product/Quantity/Decrement'
import { increment } from '@/functions/Product/Quantity/Increment'
import { useAppContext } from '@/utils/Context'
import { Product } from '@/utils/ProductInterface'
import { Minus, Plus } from 'lucide-react'
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
  }, [])

  const Addtocart = async (QTY: number, ID: any) => {
    const data = await increment(QTY, ID)
    setdata(data)
    // if (Productdata) {
    //   alert('ADDED TO CART')
    //   setCart((prev: Product[]) => [...prev, Productdata])
    //   console.log(cart)
    // }
  }

  const Increment = async (QTY: number, ID: any) => {
    const data = await increment(QTY, ID)
    setdata(data)
  }

  const Decrementt = async (QTY: number, ID: any) => {
    const data = await Decrement(QTY, ID)
    setdata(data)
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
          <h3>{Productdata.quantity}</h3>

          {Productdata.quantity > 0 ? (
            <div className="flex items-center justify-center space-x-4 p-4 bg-white border rounded-lg shadow-md">
              <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
                <Minus
                  size={16}
                  onClick={() =>
                    Decrementt(Productdata.quantity, Productdata.id)
                  }
                />
              </button>
              <button className="bg-blue-600 text-white p-4 rounded-md flex items-center justify-center">
                {Productdata.quantity}
              </button>
              <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
                <Plus
                  onClick={() =>
                    Increment(Productdata.quantity, Productdata.id)
                  }
                  size={16}
                />
              </button>
            </div>
          ) : (
            <button
              onClick={() => Addtocart(Productdata.quantity, Productdata.id)}
              className="bg-blue-600 p-4"
            >
              ADD TO CART
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default ProductPage
