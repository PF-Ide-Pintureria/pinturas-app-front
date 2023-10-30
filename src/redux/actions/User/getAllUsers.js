import { GET_ALL_USERS, BASE_URL } from '../../action-type'
import axios from 'axios'

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = (await axios.get(`${BASE_URL}users/`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem('token'))
        }
      })).data
      const users = response.users

      return dispatch({ type: GET_ALL_USERS, payload: users })
    } catch (error) {
      console.error(error.response)
    }
  }
}
