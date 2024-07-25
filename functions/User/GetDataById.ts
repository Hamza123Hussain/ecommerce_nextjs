import axios from 'axios'

export const GetUserbyId = async (id: any) => {
  try {
    const Response = await axios.get(`/api/User/GetByID?id=${id}`)
    if (Response.status === 201) {
      return Response.data[0]
    }
  } catch (error) {
    console.log('FUNCTION ERROR', error)
  }
}
