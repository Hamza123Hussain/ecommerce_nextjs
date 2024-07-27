import axios from 'axios'

export const GetuserOrder = async (id: any) => {
  try {
    const Response = await axios.get(`/api/Order/GetUserOrder?id=${id}`)
    if (Response.status == 201) {
      console.log('from functions', Response.data)
      return Response.data
    }
  } catch (error) {
    console.log('Function ERROR : ', error)
  }
}
