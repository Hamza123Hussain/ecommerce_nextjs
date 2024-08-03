import axios from 'axios'

export const GetALLRevenue = async () => {
  try {
    const Response = await axios.get(`/api/Order/GetRevenue`)
    if (Response.status === 201) {
      return Response.data
    }
    console.log('NO Response')
  } catch (error) {
    console.log('API ERROR', error)
  }
}
