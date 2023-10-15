import axios from 'axios'
import { BASE_URL, PUT_POST } from '../../action-type'

const putPost = (formData, id) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.put(`${BASE_URL}blogs/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: JSON.parse(token)
        }
      })
      dispatch({ type: PUT_POST })
      return response
    } catch (error) {
      console.error(error)
      return error.response
    }
  }
}

export default putPost
