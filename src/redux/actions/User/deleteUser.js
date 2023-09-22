import axios from 'axios'
import { DELETE_USER, BASE_URL } from '../../action-type'

export const deleteUser = (id) => {
  return (dispatch) => {
    try {
      const user = axios.delete(`${BASE_URL}users/${id}`)
      dispatch({ type: DELETE_USER, payload: user })
    } catch (error) {
      console.log(error)
    }
  }
}
