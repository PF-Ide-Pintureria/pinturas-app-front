import axios from "axios";
import { SAVE_REVIEW, URL_SAVE_REVIEW } from "../../action-type";

export const saveReview = (userReview, orderId) => {
  return async (dispatch) => {
    try {
      console.log(userReview, orderId);
      const response = await axios.post(
        `${URL_SAVE_REVIEW}/reviews/${orderId}`,
        userReview
      );

      dispatch({ type: SAVE_REVIEW, payload: userReview });

      return response;
    } catch (error) {
      console.log(error);
    }
  };
};
