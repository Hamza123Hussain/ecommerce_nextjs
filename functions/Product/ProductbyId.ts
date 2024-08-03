import axios from 'axios'

export const getdatabyid = async (id: any) => {
  try {
    const Response = await axios.get('/api/Product/Getbyid', {
      params: { id },
    })
    if (Response.status === 200) {
      console.log('dATAS ::', Response.data)
      return Response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR:', error)
  }
}
