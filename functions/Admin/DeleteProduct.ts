import axios from 'axios'

export const deleteProduct = async (id: any) => {
  try {
    const response = await axios.delete(`/api/Product/Delete?id=${id}`)
    if (response.status === 201) {
      return true
    }
  } catch (error) {
    console.log('THE ERROR ON FUNCTION ', error)
    return false
  }
}
