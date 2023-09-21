import { GET_BEST_SELL, BASE_URL } from '../../action-type'
import axios from 'axios'

const limit = 4

export const bestSellers = () => {
  return async (dispatch) => {
    const product = (await axios.get(`${BASE_URL}products?limit=${limit}&minRating=5`)).data.results.rows
    dispatch({ type: GET_BEST_SELL, payload: product })
  }
}
