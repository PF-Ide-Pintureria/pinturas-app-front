import axios from 'axios'
import { DELETE_USER, BASE_URL } from '../../action-type'

export const deleteUser = (id) => {
  return (dispatch) => {
    try {
      const response = axios.delete(`${BASE_URL}users/${id}`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem('token'))
        }
      })
      dispatch({ type: DELETE_USER })
      return response
    } catch (error) {
      console.log(error)
      return error.response
    }
  }
}
