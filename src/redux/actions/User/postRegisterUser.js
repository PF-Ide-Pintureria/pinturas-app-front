import axios from 'axios'
import { POST_REGISTER_USER, BASE_URL } from '../../action-type'

export const postRegisterUser = (userCreate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}users/register/`, userCreate)

      const newUser = response.status === 'success' ? response.user : {}
      dispatch({ type: POST_REGISTER_USER, payload: newUser })

      return response
    } catch (error) {
      console.log(error)
    }
  }
}
