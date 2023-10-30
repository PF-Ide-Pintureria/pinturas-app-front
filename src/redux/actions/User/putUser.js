import axios from 'axios'
import { PUT_USER, BASE_URL } from '../../action-type'

export const putUser = (idUser, formData) => {
  const token = localStorage.getItem('token')
  return async (dispatch) => {
    try {
      const response = await axios.put(`${BASE_URL}users/${idUser}`, formData, { headers: { Authorization: JSON.parse(token) } })

      dispatch({ type: PUT_USER, payload: response.data.usuario })
      return response
    } catch (error) {
      console.log(error)
      return error.response
    }
  }
}
