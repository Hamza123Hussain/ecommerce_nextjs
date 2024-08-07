import axios from 'axios'

export const GetALLRevenue = async () => {
  try {
    const Response = await axios.get(`http://localhost:8000/api/Revenue`)
    if (Response.status === 201) {
      return Response.data
    }
    console.log('NO Response')
  } catch (error) {
    console.log('API ERROR', error)
  }
}
