import { GET_CART, GET_CART_ID, BASE_URL } from '../../action-type'
import axios from 'axios'

export const getCart = (idUser) => {
  return async (dispatch) => {
    try {
      const response = (await axios.get(`${BASE_URL}carts?idUser=${idUser}`)).data

      const id = response.cart ? response.cart.idCart : ''
      localStorage.setItem('idCart', id)
      let parsed
      if (response.cart) {
        parsed = response.cart?.products.map((product) => JSON.parse(product))
      } else {
        parsed = null
      }
      const cart = parsed
      // console.log('cart action getCart', cart)
      dispatch({ type: GET_CART_ID, payload: id })
      dispatch({ type: GET_CART, payload: cart })
      return cart
    } catch (error) {
      console.log('error getCart', error)
    }
  }
}
