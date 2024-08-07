// src/functions/Product/Create.js
import { Product } from '@/utils/ProductInterface'
import axios from 'axios'

export const CreateProduct = async (product: Product) => {
  try {
    const response = await axios.post(
      'https://ecommerce-backend-ecru-six.vercel.app/api/Products',
      {
        Product: product,
      }
    )
    if (response.status === 201) {
      return response.data
    } else {
      console.error('Failed to create product')
      return null
    }
  } catch (error) {
    console.error('Error creating product:', error)
    return null
  }
}
