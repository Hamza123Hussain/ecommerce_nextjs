import axios from 'axios'

export const increment = async (quantity: number, id: String) => {
  try {
    const Response = await axios.put('/api/Product/UPDATEQTY/Incrment', {
      id,
      quantity,
    })
    if (Response.status == 200) {
      return Response.data[0]
    }
  } catch (error) {
    console.log(error)
  }
}
