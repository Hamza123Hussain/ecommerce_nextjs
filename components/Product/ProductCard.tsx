'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Product } from '@/utils/ProductInterface'
import { useRouter } from 'next/navigation'
import AddtoCartBtn from './AddtoCartBtn'

const ProductCard = ({
  product,
  SetQty,
  setStock,
}: {
  product: Product
  SetQty: any
  setStock: any
}) => {
  const router = useRouter()

  return (
    <section className="py-12 sm:py-16 bg-white" key={product.id}>
      <div className="container mx-auto px-4">
        <button
          onClick={() => router.back()}
          className="flex items-center mb-8 text-gray-700 hover:text-gray-900"
        >
          <ArrowLeft size={24} />
          <span className="ml-2 text-lg font-medium">GO BACK</span>
        </button>
        <div className="flex flex-col lg:flex-row gap-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg transition-shadow hover:shadow-2xl">
          <div className="lg:w-1/2">
            <div className="max-w-full overflow-hidden rounded-lg shadow-md">
              <img
                className="h-full w-full object-cover"
                src={product.image_url}
                alt={product.name}
              />
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
                {product.description}
              </p>

              <div className="mt-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  Rs {product.price}
                </h1>
                {product.stock > 0 ? (
                  <div className="mt-10">
                    <AddtoCartBtn
                      product={product}
                      onQuantityChange={SetQty}
                      onstock={setStock}
                    />
                  </div>
                ) : (
                  <span className="text-red-500 font-bold text-lg mt-4">
                    Sold Out
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCard
