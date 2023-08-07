import axios from "axios";
import { SET_USER_DATA, URL_INFO_USER_AUTH0 } from "../../action-type";

export const setUserData = (userData) => {
  return async (dispatch) => {
    try {
      // Enviar información del usuario al backend
      const response = await axios.post(
        `${URL_INFO_USER_AUTH0}ruta-del-endpoint-para-enviar-info`,
        userData
      );

      // Si la solicitud es exitosa, dispatchear para actualizar el estado de Redux
      dispatch({ type: SET_USER_DATA, payload: userData });

      return response;
    } catch (error) {
      console.log(error);
    }
  };
};
