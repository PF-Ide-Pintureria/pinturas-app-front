import { SET_LOW_PRICE } from '../../action-type'

export const setLowPrice = (lowPrice) => ({
  type: SET_LOW_PRICE,
  payload: lowPrice
})
