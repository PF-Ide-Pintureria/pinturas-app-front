import { GET_ALL_PRODUCTS, SET_TOTAL_PAGES, BASE_URL } from '../../action-type'
import axios from 'axios'

export const allProducts = (page) => {
  return async (dispatch) => {
    try {
      const url = []
      if (page) url.push(`&page=${page}`)
      if (!page) url.push(`&page=${1}`)
      const urlJoin = url.join('')

      const response = await axios.get(`${BASE_URL}products?active=true${urlJoin}`)
      const pages = response.data.pages
      const products = response.data.results.rows

      dispatch({ type: SET_TOTAL_PAGES, payload: pages })
      return dispatch({ type: GET_ALL_PRODUCTS, payload: products })
    } catch (error) {
      console.error(error)
    }
  }
}
