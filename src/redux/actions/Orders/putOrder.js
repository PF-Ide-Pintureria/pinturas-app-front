import axios from 'axios'
import { BASE_URL, PUT_ORDER } from '../../action-type'

const putOrder = (idOrder, edition) => {
  return async (dispatch) => {
    console.log('idOrder', idOrder)
    console.log('edition', edition)
    try {
      const rawResponse = axios.put(`${BASE_URL}orders/${idOrder}`, edition)
      console.log('rawResponse', rawResponse)
      const middleResponse = rawResponse?.data
      console.log('middleResponse', middleResponse)
      const response = middleResponse?.order
      console.log('response', response)

      dispatch({
        type: PUT_ORDER,
        payload: response
      })
      return response
    } catch (error) {
      console.error(error)
    }
  }
}

export default putOrder
