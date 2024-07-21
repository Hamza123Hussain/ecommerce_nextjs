'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppContext } from '@/utils/Context'
import { fetchProduct } from '@/functions/Product/GettingAProduct'
import ProductCard from '@/components/Product/ProductCard'
import { Product } from '@/utils/ProductInterface'

interface PageProps {
  params: {
    id: string
  }
}

const ProductPage = ({ params }: PageProps) => {
  const { loading, setLoading, products } = useAppContext()
  const Router = useRouter()
  const [product, setproduct] = useState<Product | any>({})
  const GetProduct = async () => {
    const data = await fetchProduct(params.id)
    if (data) setproduct(data)
    setLoading(false)
  }
  useEffect(() => {
    GetProduct()
  }, [params.id])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center p-6 border-2 rounded-lg">
      <h5 onClick={() => Router.back()}>GO BACK</h5>
      {!loading && <ProductCard productData={product} />}
    </div>
  )
}

export default ProductPage
