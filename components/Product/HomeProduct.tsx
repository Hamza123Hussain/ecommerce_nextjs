'use client'

import { Product } from '@/utils/ProductInterface'
import { useRouter } from 'next/navigation'

const HomeProduct = ({ product }: { product: Product }) => {
  const Router = useRouter()
  return (
    <div key={product.id} onClick={() => Router.push(`/Product/${product.id}`)}>
      <div className="relative hover:shadow-md bg-white border-2 border-slate-200 hover:shadow-gray-300 flex w-full flex-col overflow-hidden rounded-lg  shadow-md">
        <img
          src={product.image_url}
          alt={product.name}
          className="rounded-t-lg  w-full h-[20vh] sm:h-[40vh]"
        />

        <div className=" mt-2 px-2">
          <h5 className="text-xs sm:text-lg tracking-tight text-slate-900">
            {product.name}
          </h5>

          <div className="mt-2   w-full flex justify-end pb-2 ">
            <span className="text-xs sm:text-lg font-bold text-slate-900">
              Rs {product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeProduct
