import { SET_CART } from '../../action-type'

export const setCart = (cart) => {
  return { type: SET_CART, payload: cart }
}
