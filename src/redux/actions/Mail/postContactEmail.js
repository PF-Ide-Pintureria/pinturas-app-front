import axios from 'axios'
import { POST_CONTACT_EMAIL, BASE_URL } from '../../action-type'

export const postContactEmail = (email) => {
  return async (dispatch) => {
    const response = await axios.post(`${BASE_URL}mail/contact`, email)
    dispatch({ type: POST_CONTACT_EMAIL, payload: email })
    return response
  }
}
