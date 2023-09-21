import axios from 'axios'
import { PUT_PRODUCT, BASE_URL } from '../../action-type'

export const putProduct = (id, formData) => {
  return async (dispatch) => {
    const response = await axios.put(`${BASE_URL}products/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    const newProduct = response.status === 201 ? response.product : {}
    dispatch({ type: PUT_PRODUCT, payload: newProduct })
    return response
  }
}
