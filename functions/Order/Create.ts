import { Product } from '@/utils/ProductInterface'
import axios from 'axios'

export const placeOrder = async (
  cart: Product[],
  total: number,
  userDetail: any,
  userid: any
) => {
  try {
    const response = await axios.post('/api/Order/Create', {
      cart,
      total,
      userDetail,
      userid,
    })

    if (response.status === 201) {
      console.log('Order placed successfully:', response.data)
      // alert('Order placed successfully')
      return response.data
    } else {
      console.log('Error placing order:', response.data)
      alert('Error placing order')
    }
  } catch (error) {
    console.error('API ERROR:', error)
    alert('An error occurred while placing the order')
  }
}
