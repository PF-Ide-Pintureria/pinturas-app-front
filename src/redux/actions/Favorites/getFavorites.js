import axios from 'axios'
import { BASE_URL, GET_FAVORITES } from '../../action-type'

export const getFavorites = (id) => {
  return async (dispatch) => {
    try {
      const user = {
        idUser: id
      }

      const response = (await axios.post(`${BASE_URL}favorites/user`, user)).data
      dispatch({ type: GET_FAVORITES, payload: response })
    } catch (error) {
      console.log('error getFavorites', error)
    }
  }
}
