import { GET_PROVIDERS, BASE_URL } from '../../action-type'
import axios from 'axios'

export const getProviders = () => {
  return async (dispatch) => {
    try {
      let providers = (await axios.get(`${BASE_URL}providers/`)).data
      providers = providers.filter((provider) => provider.active === true)
      return dispatch({ type: GET_PROVIDERS, payload: providers })
    } catch (error) {
      console.error(error)
    }
  }
}
