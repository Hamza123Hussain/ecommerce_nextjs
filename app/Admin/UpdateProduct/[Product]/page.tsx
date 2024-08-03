'use client'
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'

import { Product } from '@/utils/ProductInterface'
import { CreateProduct } from '@/functions/Product/Create'
import InputFields from '@/components/Product/inputfields'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { getdatabyid } from '@/functions/Product/ProductbyId'
import { ClipLoader } from 'react-spinners'
import { UpdateProduct } from '@/functions/Product/Update'

export default function UpdateFunction({ params }: { params: any }) {
  console.log('IDDDDD', params.Product)

  const Router = useRouter()
  const [product, setProduct] = useState<Product>({
    id: null,
    name: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    image_url: '',
    quantity: 0,
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault() // Prevent default form submission
    setLoading(true)
    const data: any = await UpdateProduct(product)
    setLoading(false)
    if (data) {
      toast.success('Product Updated successfully!')
      Router.push('/')
    } else {
      toast.error('Failed to add product')
    }
  }

  const GetProduct = async () => {
    setLoading(true)
    try {
      const Data = await getdatabyid(params.Product)
      if (Data) {
        setProduct(Data)
      }
    } catch (error) {
      toast.error('Failed to fetch product data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    GetProduct()
  }, [])

  return (
    <div className="flex flex-col gap-8 mt-10 justify-center items-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        {loading ? 'Loading...' : 'Update Product'}
      </h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <ClipLoader size={50} color={'#123abc'} loading={loading} />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 space-y-6"
        >
          <div className="flex flex-col gap-4">
            <label className="text-xl font-semibold text-gray-700">
              Description:
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 transition"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <InputFields
              Name="name"
              value={product.name}
              onChange={handleChange}
            />
            <InputFields
              Name="price"
              value={product.price}
              onChange={handleChange}
            />
            <InputFields
              Name="stock"
              value={product.stock}
              onChange={handleChange}
            />
            <InputFields
              Name="category"
              value={product.category}
              onChange={handleChange}
            />
            <InputFields
              Name="image_url"
              value={product.image_url}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
            disabled={loading}
          >
            {loading ? 'updating...' : 'Update Product'}
          </button>
        </form>
      )}
    </div>
  )
}
