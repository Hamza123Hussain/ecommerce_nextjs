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
        const savedProduct = localStorage.getItem(`product-${id}`)
        if (savedProduct) {
          const savedData = JSON.parse(savedProduct)
          product.quantity = savedData.quantity
        }
        if (product) {
          return product
        } else {
          // Fetch product data from API if not found in local storage
          const data: Product = await getdatabyid(id)

          const savedProduct = localStorage.getItem(`product-${id}`)
          if (savedProduct) {
            const savedData = JSON.parse(savedProduct)
            data.quantity = savedData.quantity
          }
          return data
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
}
