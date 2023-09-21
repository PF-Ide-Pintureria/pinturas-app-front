import { GET_PRODUCT_FILTER, SET_TOTAL_PAGES, BASE_URL } from '../../action-type'
import axios from 'axios'

export const getProductFilter = (page, category, low, high) => {
  // minRating,
  // maxRating,
  // minStock,
  // maxStock,
  // color,
  // sortBy,
  // orderBy

  return async (dispatch) => {
    try {
      const url = ['products?active=true']
      if (page) url.push(`&page=${page}`)
      if (!page) url.push(`&page=${1}`)
      if (category) url.push(`&category=${category}`)
      if (low > 0) url.push(`&lowPrice=${low}`)
      if (high > 0) url.push(`&highPrice=${high}`)
      const urlJoin = url.join('')

      const response = await axios.get(`${BASE_URL}${urlJoin}`)
      const pages = response.data.pages
      const products = response.data.results.rows

      dispatch({ type: SET_TOTAL_PAGES, payload: pages })
      return dispatch({ type: GET_PRODUCT_FILTER, payload: products })
    } catch (error) {
      console.log(error)
      return dispatch({ type: GET_PRODUCT_FILTER, payload: [] })
    }
  }
}
