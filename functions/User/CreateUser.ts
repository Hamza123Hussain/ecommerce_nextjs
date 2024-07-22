import axios from 'axios'

export const CreateUser = async (User: any) => {
  try {
    const Response = await axios.post('/api/User/Create', User)
    if (Response.status == 201) {
      return Response.data
    } else {
      console.log('NO USER STORED')
    }
  } catch (error) {
    console.log('RESPONSE NOT GENERATED', error)
  }
}
