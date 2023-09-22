import axios from 'axios'
import { BASE_URL, PUT_POST } from '../../action-type'

const putPost = (formData, id) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      const tokenLimpio = token.replace(/['"]+/g, '')
      const rawResponse = await axios.put(`${BASE_URL}blogs/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: tokenLimpio
        }
      })
      const middleResponse = rawResponse?.data
      const response = middleResponse?.blog
      if (response) {
        dispatch({
          type: PUT_POST,
          payload: response
        })
        return middleResponse
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export default putPost
