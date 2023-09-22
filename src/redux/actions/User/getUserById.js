import axios from 'axios'
import { BASE_URL, GET_USER_BY_ID } from '../../action-type'

const getUserById = (idUser) => {
  return async (dispatch) => {
    try {
      const rawResponse = await axios.get(`${BASE_URL}users/${idUser}`)
      const responseData = rawResponse?.data
      const response = responseData?.usuario

      return dispatch({ type: GET_USER_BY_ID, payload: response })
    } catch (error) {
      console.error(error)
    }
  }
}

export default getUserById
