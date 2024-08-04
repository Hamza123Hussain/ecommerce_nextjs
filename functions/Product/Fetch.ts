import axios from 'axios'

export const getdata = async () => {
  try {
    const response = await axios.get('/api/Product/Get')
    if (response.status === 200) {
      return response.data
    } else {
      console.log('ERROR: Unexpected response status:', response.status)
      return response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR:', error)
    return error
  }
}
