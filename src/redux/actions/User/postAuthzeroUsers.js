import axios from 'axios'
import { BASE_URL, SET_USER_DATA } from '../../action-type'

export const postAuthzeroUsers = (userData) => {
  return async (dispatch) => {
    try {
      // Enviar información del usuario al backend
      const response = await axios.post(
        `${BASE_URL}users/login-authzero`, userData)

      // Si la solicitud es exitosa, dispatchear para actualizar el estado de Redux
      dispatch({ type: SET_USER_DATA, payload: userData })

      return response
    } catch (error) {
      console.log(error)
    }
  }
}
