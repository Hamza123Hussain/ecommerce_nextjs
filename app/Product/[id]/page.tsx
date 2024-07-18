'use client'
import ProductCard from '@/components/Product/ProductCard'
import { getdatabyid } from '@/functions/Product/ProductbyId'
import { useAppContext } from '@/utils/Context'
import { Product } from '@/utils/ProductInterface'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

interface PageProps {
  params: {
    id: string
  }
}

const ProductPage = ({ params }: PageProps) => {
  const { setProductData, loading, setLoading } = useAppContext()
  const Router = useRouter()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data: Product = await getdatabyid(params.id)
        const savedProduct = localStorage.getItem(`product-${params.id}`)
        if (savedProduct) {
          const savedData = JSON.parse(savedProduct)
          data.quantity = savedData.quantity
        }
        setProductData(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [params.id, setProductData, setLoading])

  return (
    <div className="flex flex-col gap-10 justify-center items-center p-6 border-2 rounded-lg">
      <h5 onClick={() => Router.back()}>GO BACK</h5>
      {!loading && <ProductCard />}
    </div>
  )
}

export default ProductPage
