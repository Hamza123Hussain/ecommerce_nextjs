import axios from 'axios'

export const CreateUser = async (User: any, userid: any) => {
  try {
    const Response = await axios.post('/api/User/Create', { User, userid })
    if (Response.status == 201) {
      return Response.data[0]
    } else {
      console.log('NO USER STORED')
    }
  } catch (error) {
    console.log('RESPONSE NOT GENERATED', error)
  }
}
