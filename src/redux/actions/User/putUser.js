import axios from 'axios'
import { PUT_USER, BASE_URL } from '../../action-type'

export const putUser = (idUser, formData) => {
  return async (dispatch) => {
    try {
      const response = (await axios.put(`${BASE_URL}users/${idUser}`, formData))

      dispatch({ type: PUT_USER, payload: response.data.usuario })
      return response
    } catch (error) {
      console.log('error putUser', error)
    }
  }
}
