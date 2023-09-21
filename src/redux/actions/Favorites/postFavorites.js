import axios from 'axios'
import { BASE_URL, ADD_FAVORITE } from '../../action-type'

export const postFavorites = (data) => {
  return async (dispatch) => {
    try {
      const response = (await (axios.post(`${BASE_URL}favorites`, data))).data
      dispatch({ type: ADD_FAVORITE, payload: response })

      return response.error ? 'existe' : response
    } catch (error) {
      console.log('error postFavorites', error)
    }
  }
}
