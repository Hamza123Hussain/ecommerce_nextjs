import { Product } from '@/utils/ProductInterface'
import axios from 'axios'

export const CreateProduct = async (Product: Product) => {
  try {
    const Response = await axios.post('/api/Product/ADD', { Product })
    if (Response.status === 201) {
      return true
    } else {
      console.log('NO DATA')
    }
  } catch (error) {
    // alert('DATA HAS BEEN INSERTED')
  }
}
