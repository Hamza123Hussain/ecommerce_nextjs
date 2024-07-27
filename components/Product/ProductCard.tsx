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
    <section className="py-12 sm:py-16 bg-gray-50" key={product.id}>
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
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 sm:text-5xl">
                {product.name}
              </h1>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 sm:text-5xl"></h1>
              <div className="mt-4 md:mt-6 flex items-center gap-4 md:gap-10">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
                  Rs {product.price}
                </h1>
                {product.stock > 0 ? (
                  <AddtoCartBtn
                    product={product}
                    onQuantityChange={SetQty}
                    onstock={setStock}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
        <p>{product.stock}</p>

        <div className="mt-12 lg:col-span-3">
          <div className="border-b border-gray-300">
            <nav className="flex gap-4">
              <a
                href="#"
                title=""
                className="border-b-2 border-gray-900 py-4 text-sm md:text-base font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
              >
                Description
              </a>
            </nav>
          </div>

          <div className="mt-8 flow-root sm:mt-12">
            <h1 className="text-2xl md:text-3xl font-bold">
              Delivered To Your Door
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              accusantium nesciunt fuga.
            </p>
            <h1 className="mt-8 text-2xl md:text-3xl font-bold">
              From the Fine Farms of Brazil
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              numquam enim facere.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
              Amet consectetur adipisicing elit. Optio numquam enim facere.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              rerum nostrum eius facere, ad neque.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCard
