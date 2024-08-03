import axios from 'axios'

export const SendEmail = async (Email: any, Subject: string, Text: string) => {
  try {
    const Response = await axios.post('/api/Email', { Email, Subject, Text })

    if (Response.status == 200) {
      return true
    }
  } catch (error) {
    console.log('ERROR IN FUNCTION', error)
  }
}
