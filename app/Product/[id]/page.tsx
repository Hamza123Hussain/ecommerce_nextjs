'use client'
import React, { useEffect, useState } from 'react'
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
  const { loading, setLoading } = useAppContext()
  const [product, setProduct] = useState<Product | any>({})
  const [quantity, setQuantity] = useState<number>(product.quantity | 0)

  const GetProduct = async () => {
    const data = await fetchProduct(params.id)
    if (data) {
      setProduct(data)
      setQuantity(data.quantity || 0) // Initialize quantity
    }
    setLoading(false)
  }

  useEffect(() => {
    GetProduct()
  }, [])

  useEffect(() => {
    // Update product quantity whenever the quantity state changes
    setProduct((prevProduct: Product) => ({
      ...prevProduct,
      quantity: quantity,
    }))
  }, [quantity])

  if (loading) {
    return (
      <div className=" min-h-screen justify-center items-center flex">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center p-6 border-2 rounded-lg">
      <div className="flex flex-col justify-center items-center">
        <ProductCard product={product} SetQty={setQuantity} />
      </div>
    </div>
  )
}

export default ProductPage
