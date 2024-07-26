import axios from 'axios'

export const getdata = async () => {
  try {
    const Response = await axios.get('/api/Product/Get')
    if (Response.status == 201) {
      return Response.data
    } else {
      console.log('ERROR')
    }
  } catch (error) {
    console.log('FUNCTION ERROR:', error)
  }
}
