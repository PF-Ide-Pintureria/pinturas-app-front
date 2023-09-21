import { BASE_URL, GET_ALL_PRODUCTS_NO_FILTER } from '../../action-type'
import axios from 'axios'

export const getAllProductsNoFilter = () => {
  return async (dispatch) => {
    try {
      const response = axios.get(`${BASE_URL}products/allproducts`)
      const allProducts = (await response).data
      dispatch({
        type: GET_ALL_PRODUCTS_NO_FILTER,
        payload: allProducts
      })
    } catch (error) {
      console.error(error)
    }
  }
}
