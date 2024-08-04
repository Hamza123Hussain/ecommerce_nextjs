import axios from 'axios'

export const SendEmail = async (
  id: any,
  Email: any,
  Fullname: any,
  Name: any,
  cart: Array<{ name: string; quantity: number; price: number }>,
  total: number,
  address: string,
  paymentMethod: string,
  Subject: string
) => {
  try {
    const response = await axios.post('/api/Email', {
      id,
      Email,
      Fullname,
      Name,
      cart,
      total,
      address,
      paymentMethod,
      Subject,
    })

    if (response.status === 200) {
      return true
    }
  } catch (error: any) {
    console.error(
      'ERROR IN FUNCTION',
      error.response ? error.response.data : error.message
    )
    return false
  }
}
