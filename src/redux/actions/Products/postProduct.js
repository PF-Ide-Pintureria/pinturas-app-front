import axios from 'axios'
import { POST_PRODUCT, BASE_URL } from '../../action-type'

export const postProduct = (productCreate) => {
  const token = localStorage.getItem('token')
  return async (dispatch) => {
    const response = await axios.post(`${BASE_URL}products`, productCreate, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: JSON.parse(token)
      }
    })

    const newProduct = response.status === 'success' ? response.product : {}
    dispatch({ type: POST_PRODUCT, payload: newProduct })
    return response
  }
}
