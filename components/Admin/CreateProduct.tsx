'use client'
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'

import { Product } from '@/utils/ProductInterface'
import { CreateProduct } from '@/functions/Product/Create'
import InputFields from '@/components/Product/inputfields'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { useAppContext } from '@/utils/Context'
import { ArrowBigLeft, ArrowLeftCircle } from 'lucide-react'

export default function AddProduct() {
  const { products } = useAppContext()
  const { index, setindex } = useAppContext()
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault() // Prevent default form submission
    const data: any = await CreateProduct(product)
    if (data) {
      console.log('NEW DATA', data)

      toast.success('Product added successfully!')

      console.log('PRODUCTSS', products)
      setProduct({
        id: null,
        name: '',
        description: '',
        price: 0,
        stock: 0,
        category: '',
        image_url: '',
        quantity: 0,
      }) // Reset form after submission
      // Router.push('/')
    } else {
      // Router.push('/')
    }
  }

  return (
    <>
      {' '}
      <div className="mt-10 flex justify-between items-center dark:bg-white dark:text-black">
        <ArrowLeftCircle
          onClick={() => setindex(0)}
          size={35}
          className=" ml-10 cursor-pointer"
        />{' '}
        <h1 className="text-xl md:text-5xl font-bold text-gray-800">
          Add New Product
        </h1>
        <div className="bg-transparent text-transparent">sas</div>
      </div>
      <div className="flex flex-col gap-8 ustify-center items-center px-4 sm:px-6 lg:px-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  )
}
