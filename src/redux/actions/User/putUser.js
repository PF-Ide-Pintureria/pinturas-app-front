import axios from 'axios'
import { PUT_USER, BASE_URL } from '../../action-type'

export const putUser = (idUser, formData) => {
  return async (dispatch) => {
    try {
      console.log(idUser, formData)
      const response = await axios.put(`${BASE_URL}users/${idUser}`, formData)
      console.log('response en el action', response)
      const updateUser = response.usuario
      dispatch({ type: PUT_USER, payload: updateUser })
      return response
    } catch (error) {
      console.log('error putUser', error)
    }
  }
}
