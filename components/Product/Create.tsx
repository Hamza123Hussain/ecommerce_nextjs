'use client'
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import InputFields from './inputfields' // Adjust the import path as needed
import { Product } from '@/utils/ProductInterface'
import { CreateProduct } from '@/functions/Product/Create'
import { getdata } from '@/functions/Product/Fetch'

export default function AddProduct() {
  const [product, setProduct] = useState<Product>({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    image_url: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    const data = await CreateProduct(product)
  }

  return (
    <div className=" flex flex-col gap-10 mt-10 justify-center items-center">
      <h1 className=" text-6xl font-bold">Add New Product</h1>
      <div className=" flex flex-col justify-center items-center gap-10">
        {' '}
        <div className=" flex gap-10  justify-center items-center border-2 rounded-lg border-gray-600 p-4">
          <label className=" text-2xl w-32 font-bold">Description: </label>
          <textarea
            className=" w-[80vw] rounded-lg"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <InputFields Name="name" value={product.name} onChange={handleChange} />
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
      </div>{' '}
      <button
        className=" mb-5 bg-green-500 rounded-lg p-4 text-white"
        onClick={handleSubmit}
      >
        Add Product
      </button>
    </div>
  )
}
