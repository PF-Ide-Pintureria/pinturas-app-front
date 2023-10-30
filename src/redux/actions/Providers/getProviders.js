import { GET_PROVIDERS, BASE_URL } from '../../action-type'
import axios from 'axios'

export const getProviders = () => {
  return async (dispatch) => {
    try {
      const providers = (await axios.get(`${BASE_URL}providers/`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem('token'))
        }
      })).data

      return dispatch({ type: GET_PROVIDERS, payload: providers })
    } catch (error) {
      console.error(error)
    }
  }
}
