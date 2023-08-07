import axios from "axios";
import { SAVE_REVIEW, URL_SAVE_REVIEW } from "../../action-type";

export const saveReview = (userReview) => {
  return async (dispatch) => {
    try {
      // Enviar información de la reseña al backend
      const response = await axios.post(
        `${URL_SAVE_REVIEW}ruta-del-endpoint-para-enviar-review`,
        userReview
      );

      // Si la solicitud es exitosa, dispatchear para actualizar el estado de Redux
      dispatch({ type: SAVE_REVIEW, payload: userReview });

      return response;
    } catch (error) {
      console.log(error);
    }
  };
};
