import axios from 'axios'
import { BASE_URL, GET_POST_BY_ID } from '../../action-type'

const getPostById = (idPost) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      const response = (await axios.get(`${BASE_URL}blogs/details/${idPost}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: JSON.parse(token)
        }
      })).data
      if (response.blog) {
        dispatch({
          type: GET_POST_BY_ID,
          payload: response.blog
        })
        return response
      }
    } catch (error) {
      console.error(error)
      return error.response
    }
  }
}

export default getPostById
