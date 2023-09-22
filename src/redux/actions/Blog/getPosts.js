import axios from 'axios'
import { BASE_URL, GET_POSTS } from '../../action-type'

const getPosts = () => {
  return async (dispatch) => {
    try {
      const rawResponse = await axios.get(`${BASE_URL}blogs`)
      const middleResponse = rawResponse?.data
      const response = middleResponse.blogs
      if (response) {
        dispatch({
          type: GET_POSTS,
          payload: response
        })
      } else {
        console.log('hubo un error')
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export default getPosts
