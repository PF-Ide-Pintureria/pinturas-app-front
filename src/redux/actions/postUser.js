import axios from "axios";
import { POST_USER, BASE_URL } from '../action-type';

export const postUser = (userCreate) => {
  return async (dispatch) => {
    const response = await axios.post(`${BASE_URL}/register`, userCreate);
    
    const newUser = response.status === 'success' ? response.user : {};
    dispatch({ type: POST_USER, payload: newUser });
    return response;
    };

};
