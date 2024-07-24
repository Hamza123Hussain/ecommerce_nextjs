import axios from 'axios'

export const OrderGet = async (id: any) => {
  try {
    const Data = await axios.get('/api/Order/Get', id)
    if (Data.status == 201) {
      console.log('DATA RECIEVED', Data)
    }
    console.log('NO DATA')
  } catch (error) {
    console.log('API ERROR', error)
  }
}
