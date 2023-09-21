import { ADD_CART } from '../../action-type'

export const addCart = (cart) => {
  console.log('cart addCart N4', cart)
  return { type: ADD_CART, payload: cart }
}
