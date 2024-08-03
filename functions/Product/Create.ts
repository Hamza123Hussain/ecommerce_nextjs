import { Product } from '@/utils/ProductInterface'
import axios from 'axios'

export const CreateProduct = async (Product: Product) => {
  try {
    const response = await axios.post('/api/Product/ADD', { Product })
    if (response.status === 201) {
      console.log(response)
    } else {
      console.log('NO DATA')
    }
  } catch (error) {
    // alert('DATA HAS BEEN INSERTED')
  }
}
