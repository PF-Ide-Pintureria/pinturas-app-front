import { SET_HIGH_PRICE } from '../../action-type'

export const setHighPrice = (highPrice) => ({
  type: SET_HIGH_PRICE,
  payload: highPrice
})
