import axios from 'axios'

export const GetAllOrders = async () => {
  try {
    const Response = await axios.get(`http://localhost:8000/api/Orders`)
    if (Response.status == 201) {
      console.log('from functions', Response.data)
      return Response.data
    }
  } catch (error) {
    console.log('Function ERROR : ', error)
  }
}
