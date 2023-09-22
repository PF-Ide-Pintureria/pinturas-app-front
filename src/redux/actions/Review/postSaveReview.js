import axios from 'axios'
import { BASE_URL, SAVE_REVIEW } from '../../action-type'

export const saveReview = (userReview, orderId) => {
  return async (dispatch) => {
    try {
      console.log('userReview', userReview)
      console.log('orderId', orderId)
      const response = await axios.post(
                `${BASE_URL}reviews/${orderId}`,
                userReview
      )

      dispatch({ type: SAVE_REVIEW, payload: userReview })

      return response
    } catch (error) {
      console.log(error)
    }
  }
}
