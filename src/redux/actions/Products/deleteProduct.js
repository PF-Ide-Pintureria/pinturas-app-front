import axios from 'axios'
import { DELETE_PRODUCT, BASE_URL } from '../../action-type'

export const deleteProduct = (id) => {
  return (dispatch) => {
    try {
      const product = axios.delete(`${BASE_URL}products/${id}`)
      dispatch({ type: DELETE_PRODUCT, payload: product })
    } catch (error) {
      console.log(error)
    }
  }
}
