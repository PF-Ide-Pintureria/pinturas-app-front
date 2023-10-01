import { DELETE_PROVIDER, BASE_URL } from '../../action-type'
import axios from 'axios'

export const deleteProvider = (providerId) => {
  return async (dispatch) => {
    const providerDeleted = (await axios.delete(`${BASE_URL}providers/${providerId}`)).data

    return dispatch({ type: DELETE_PROVIDER, payload: providerDeleted })
  }
}
