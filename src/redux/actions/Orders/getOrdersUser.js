import axios from 'axios'
import { BASE_URL, GET_ORDERS_USER } from '../../action-type'

const getOrdersUser = (userId) => {
  return async (dispatch) => {
    try {
      const rawResponse = await axios.get(`${BASE_URL}orders/user/${userId}`)
      const response = rawResponse?.data
      dispatch({ type: GET_ORDERS_USER, payload: response })
      return response
    } catch (error) {
      console.error('getOrdersUser error:', error)
    }
  }
}

export default getOrdersUser
