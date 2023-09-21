import axios from 'axios'
import { BASE_URL, GET_ALL_ORDERS } from '../../action-type'

const getAllOrders = () => {
  return async (dispatch) => {
    try {
      const rawResponse = await axios.get(`${BASE_URL}orders`)
      const response = rawResponse?.data?.orders
      dispatch({
        type: GET_ALL_ORDERS,
        payload: response
      })
      return response
    } catch (error) {
      console.error(error)
    }
  }
}
export default getAllOrders
