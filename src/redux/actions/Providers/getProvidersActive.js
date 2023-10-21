import { GET_PROVIDERS, BASE_URL } from '../../action-type'
import axios from 'axios'

export const getProvidersActive = () => {
  return async (dispatch) => {
    try {
      const providers = (await axios.get(`${BASE_URL}providers/`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem('token'))
        }
      })).data
      const providersActive = providers.filter(provider => provider.active === true)
      return dispatch({ type: GET_PROVIDERS, payload: providersActive })
    } catch (error) {
      console.error(error)
    }
  }
}
