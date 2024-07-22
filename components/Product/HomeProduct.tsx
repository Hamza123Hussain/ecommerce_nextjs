'use client'

import { Product } from '@/utils/ProductInterface'
import { useRouter } from 'next/navigation'

const HomeProduct = ({ product }: { product: Product }) => {
  const Router = useRouter()
  return (
    <div key={product.id} onClick={() => Router.push(`/Product/${product.id}`)}>
      <div className="relative hover:shadow-md bg-gray-100 hover:shadow-gray-300 flex w-full max-w-xs flex-col overflow-hidden rounded-lg  shadow-md">
        <img
          src={product.image_url}
          alt={product.name}
          className="rounded-t-lg  w-full h-[20vh] sm:h-[40vh]"
        />

        <div className="mt-4 px-5 pb-5">
          <h5 className="text-xl tracking-tight text-slate-900">
            {product.name}
          </h5>

          <div className="mt-2 mb-5 flex w-full ">
            <span className="text-3xl font-bold text-slate-900">
              Rs {product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeProduct
