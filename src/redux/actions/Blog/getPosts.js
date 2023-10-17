import axios from 'axios'
import { BASE_URL, GET_POSTS } from '../../action-type'

const getPosts = () => {
  return async (dispatch) => {
    try {
      const response = (await axios.get(`${BASE_URL}blogs`)).data
      if (response.blogs) {
        dispatch({
          type: GET_POSTS,
          payload: response.blogs
        })
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export default getPosts
