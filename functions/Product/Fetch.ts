// src/functions/Product/Fetch.ts
import axios from 'axios'

export const getdata = async () => {
  try {
    const response = await axios.get(
      'https://ecommerce-backend-ecru-six.vercel.app/api/Products'
    )
    if (response.status === 200) {
      return response.data
    } else {
      console.error('Unexpected response status:', response.status)
      return [] // Return an empty array or handle the error as needed
    }
  } catch (error) {
    console.error('Failed to fetch data:', error)
    return [] // Return an empty array or handle the error as needed
  }
}
