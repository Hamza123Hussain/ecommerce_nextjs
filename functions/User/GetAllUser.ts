import axios from 'axios'

export const GetAllUsers = async () => {
  try {
    const Response = await axios.get(
      `https://ecommerce-backend-ecru-six.vercel.app/api/Users`
    )
    if (Response.status == 201) {
      return Response.data
    }
  } catch (error) {
    console.log('API ERROR ', error)
  }
}
