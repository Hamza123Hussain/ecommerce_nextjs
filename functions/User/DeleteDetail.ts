import axios from 'axios'

export const DeleteUser = async (id: any) => {
  try {
    const Response = await axios.delete(`/api/User/Delete?id=${id}`)

    if (Response.status == 201) {
      console.log(Response.data)
    }
  } catch (error) {
    console.log('THE ERROR ON FUNCTION ', error)
  }
}
