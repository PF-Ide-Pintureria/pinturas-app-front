import axios from 'axios'
import { POST_CART, BASE_URL } from '../../action-type'

export const postCart = (cart) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}carts`, cart)

      const newCart = response
      dispatch({ type: POST_CART, payload: newCart })
      return response
    } catch (error) {
      console.log(error)
    }
  }
}
