import axios from 'axios'

export const GetALLRevenue = async () => {
  try {
    const Response = await axios.get(
      `https://ecommerce-backend-ecru-six.vercel.app/api/Revenue`
    )
    if (Response.status === 201) {
      return Response.data
    }
    console.log('NO Response')
  } catch (error) {
    console.log('API ERROR', error)
  }
}
