import { Product } from '@/utils/ProductInterface'
import axios from 'axios'

export const updateProductQuantityAndStock = async (
  product: Product,
  url: string
) => {
  try {
    const response = await axios.put(url, {
      id: product.id,
      quantity: product.quantity,
      stock: product.stock,
    })

    if (response.status === 200) {
      console.log('Product updated successfully:', response.data[0])
      alert('Product updated successfully')
      return response.data[0]
    } else {
      console.log('Error updating product:', response.data)
      alert('Error updating product')
    }
  } catch (error) {
    console.error('API ERROR:', error)
    alert('An error occurred while updating the product')
  }
}

// Example usage
