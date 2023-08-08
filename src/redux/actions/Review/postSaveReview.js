import axios from "axios";
import { SAVE_REVIEW, URL_SAVE_REVIEW } from "../../action-type";

export const saveReview = (userReview) => {
  return async (dispatch) => {
    try {

      const response = await axios.post(
        `${URL_SAVE_REVIEW}ruta-del-endpoint-para-enviar-review`,
        userReview
      );

      dispatch({ type: SAVE_REVIEW, payload: userReview });

      return response;
    } catch (error) {
      console.log(error);
    }
  };
};
