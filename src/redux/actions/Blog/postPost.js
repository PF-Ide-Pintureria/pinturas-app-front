import axios from 'axios'
import { BASE_URL, POST_POST } from '../../action-type'

const postPost = (formData) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      const response = (await axios.post(`${BASE_URL}blogs`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: JSON.parse(token)
        }
      })).data
      if (response) {
        dispatch({ type: POST_POST })
        return response
      }
    } catch (error) {
      console.error(error)
      return error.response
    }
  }
}

export default postPost
