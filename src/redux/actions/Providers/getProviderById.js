import { GET_PROVIDER_BY_ID, BASE_URL } from '../../action-type'
import axios from 'axios'

export const getProviderById = (id) => {
  return async (dispatch) => {
    try {
      const provider = (await axios.get(`${BASE_URL}providers/${id}`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem('token'))
        }
      })).data.Provider
      dispatch({ type: GET_PROVIDER_BY_ID, payload: provider })
    } catch (error) {
      console.error(error)
    }
  }
}
