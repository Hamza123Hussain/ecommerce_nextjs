'use client'

import { deleteProduct } from '@/functions/Admin/DeleteProduct'
import { Product } from '@/utils/ProductInterface'
import { Delete, Pencil } from 'lucide-react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const AdminProduct = ({ product }: { product: Product }) => {
  const Router = useRouter()
  const deleteItem = async () => {
    const success = await deleteProduct(product.id)
    if (success) {
      toast.success('ITEM DELETED')
      window.location.reload()
    } else {
      toast.error('Failed to delete item')
    }
  }
  return (
    <div
      className="relative hover:shadow-md bg-white border-2 border-slate-200 hover:shadow-gray-300 flex w-full flex-col overflow-hidden rounded-lg shadow-md"
      key={product.id}
    >
      <div onClick={() => Router.push(`/Product/${product.id}`)}>
        <img
          src={product.image_url}
          alt={product.name}
          className="rounded-t-lg w-full h-[20vh] sm:h-[40vh]"
        />
        <div className="mt-2 px-2">
          <h5 className="text-xs sm:text-lg tracking-tight text-slate-900">
            {product.name}
          </h5>
          <div className="mt-2 w-full flex justify-end pb-2">
            <span className="text-xs sm:text-lg font-bold text-slate-900">
              Rs {product.price}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-3 px-2 mb-1 items-center">
        <button onClick={deleteItem}>
          <Delete className="text-red-600" size={25} />
        </button>
        <button
          onClick={() => Router.push(`/Admin/UpdateProduct/${product.id}`)}
        >
          <Pencil className="text-blue-500" size={25} />
        </button>
      </div>
    </div>
  )
}

export default AdminProduct
