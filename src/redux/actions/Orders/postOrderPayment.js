import axios from 'axios'
import { POST_ORDER_PAYMENT, BASE_URL } from '../../action-type'

export const postOrderPayment = (idOrder) => {
  return async (dispatch) => {
    try {
      const body = { idOrder }
      const response = (await axios.post(`${BASE_URL}orders/payment`, body)).data

      dispatch({ type: POST_ORDER_PAYMENT, payload: response.body.init_point })

      return response
    } catch (error) {
      console.log('postOrderPayment error:', error)
    }
  }
}
