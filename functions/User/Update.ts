import axios from 'axios'

export const UpdateUser = async (User: any) => {
  try {
    const Response = await axios.put('/api/User/Update', { User })
    if (Response.status == 201) {
      return Response.data[0]
    } else {
      console.log('NO USER STORED')
    }
  } catch (error) {
    console.log('RESPONSE NOT GENERATED', error)
  }
}
