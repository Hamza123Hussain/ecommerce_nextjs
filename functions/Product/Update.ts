import { Product } from '@/utils/ProductInterface'
import axios from 'axios'

export const UpdateProduct = async (Product: Product) => {
  try {
    const Response = await axios.put('/api/Product/Update', { Product })
    if (Response.status === 201) {
      return true
    } else {
      console.log('NO DATA')
    }
  } catch (error) {
    // alert('DATA HAS BEEN INSERTED')
  }
}
