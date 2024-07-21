import { Product } from '@/utils/ProductInterface'
import { getdatabyid } from './ProductbyId'

export const fetchProduct = async (id: string) => {
  try {
    // Fetch products from local storage if available
    if (typeof window !== 'undefined') {
      const savedProducts = localStorage.getItem('products')
      if (savedProducts) {
        console.log('FROM LOCAL STORAGE')
        const parsedProducts = JSON.parse(savedProducts)
        // Find the product by ID in the local storage products
        const product = parsedProducts.find((item: Product) => item.id === id)

        return product
      }
    }
  } catch (error) {
    console.log(error)
  }
}
