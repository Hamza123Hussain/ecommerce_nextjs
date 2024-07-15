import axios from 'axios'

export const getdatabyid = async (id: any) => {
  try {
    const Response = await axios.get('/api/Product/Getbyid', {
      params: { id },
    })
    if (Response.status === 201) {
      console.log(Response.data[0])
      return Response.data[0]
    }
  } catch (error) {
    console.log('FUNCTION ERROR:', error)
  }
}
