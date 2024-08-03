import axios from 'axios'

export const GetAllUsers = async () => {
  try {
    const Response = await axios.get(`/api/User/GetAll`)
    if (Response.status == 201) {
      return Response.data
    }
  } catch (error) {
    console.log('API ERROR ', error)
  }
}
