import { GET_ALL_USERS, BASE_URL } from "../action-type";
import axios from "axios";

export const getAllUsers = () => {
  return async (dispatch) => {
    try {

      const response = await axios.get(`${BASE_URL}users/`).data;

      return dispatch({ type: GET_ALL_USERS, payload: response });

      } catch (error) {
        console.error(error);
      }
    };
};