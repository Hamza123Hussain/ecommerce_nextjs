import axios from 'axios'

export const GetUserList = async (id: any) => {
  try {
    const Response = await axios.get(`/api/User/Get?id=${id}`)
    if (Response.status == 201) {
      return Response.data
    }
  } catch (error) {
    console.log('API ERROR ', error)
  }
}
