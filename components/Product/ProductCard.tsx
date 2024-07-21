'use client'

import { Product } from '@/utils/ProductInterface'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <>
      <img
        src={product.image_url}
        alt={product.name}
        className="rounded-lg hover:shadow-md hover:shadow-black"
      />
      <h1 className="text-xl mt-5 text-slate-800 font-extrabold">
        {product.name}
      </h1>
      <div className="flex flex-col p-2">
        <h1 className="text-sm text-gray-700">Description</h1>
        <p className="text-gray-500 text-xs p-2">{product.description}</p>
      </div>
      <div className="flex gap-2 justify-end p-2 items-center">
        <h1 className="text-gray-700 font-bold text-sm">Price: </h1>
        <h5 className="text-gray-950 font-bold">Rs {product.price}</h5>
      </div>
    </>
  )
}

export default ProductCard
