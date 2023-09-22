import axios from 'axios'
import { BASE_URL, POST_POST } from '../../action-type'

const postPost = (formData) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      const tokenLimpio = token.replace(/['"]+/g, '')
      const rawResponse = await axios.post(`${BASE_URL}blogs`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: tokenLimpio
        }
      })
      console.log('response', rawResponse)
      const middleResponse = rawResponse?.data
      const response = middleResponse?.blog

      if (response) {
        dispatch({
          type: POST_POST,
          payload: response
        })
        return middleResponse
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export default postPost
