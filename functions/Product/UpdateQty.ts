import axios from 'axios'

export const updateqty = (quantity: number, id: any) => {
  try {
    const data = axios.put('/api/Product/UpdateQTY', { id, quantity })
  } catch (error) {
    console.log(error)
  }
}
