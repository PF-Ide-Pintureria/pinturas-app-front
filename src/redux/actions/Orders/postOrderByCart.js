import axios from 'axios'
import { POST_ORDER_CART, BASE_URL } from '../../action-type'

export const postOrderByCart = (order) => {
  return async (dispatch) => {
    try {
      const response = (await axios.post(`${BASE_URL}orders/cart`, order)).data

      dispatch({ type: POST_ORDER_CART, payload: response.order })

      return response
    } catch (error) {
      console.log('postOrderByCart error:', error)
    }
  }
}
