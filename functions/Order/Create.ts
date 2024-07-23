import { Product } from '@/utils/ProductInterface'
import axios from 'axios'

export const placeOrder = async (cart: Product[]) => {
  try {
    const response = await axios.post('/api/Order/Create', {
      cart,
    })

    if (response.status === 201) {
      console.log('Order placed successfully:', response.data)
      alert('Order placed successfully')
    } else {
      console.log('Error placing order:', response.data)
      alert('Error placing order')
    }
  } catch (error) {
    console.error('API ERROR:', error)
    alert('An error occurred while placing the order')
  }
}
