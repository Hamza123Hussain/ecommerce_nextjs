import axios from 'axios'

export const GetOrder = async (id: any) => {
  try {
    const Response = await axios.get(`/api/Order/Get?id=${id}`)
    if (Response.status === 201) {
      console.log('Response RECIEVED', Response.data[0])
    }
    console.log('NO Response')
  } catch (error) {
    console.log('API ERROR', error)
  }
}
