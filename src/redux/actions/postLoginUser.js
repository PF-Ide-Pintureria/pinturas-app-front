import axios from "axios";
import { POST_LOGIN_USER, BASE_URL } from '../action-type';

export const postLoginUser = (userLogin) => {
  return async (dispatch) => {
    try {
      console.log(userLogin);
      const response = (await axios.post(`${BASE_URL}users/login`, userLogin)).data;
      const loginUser = response.status === 'success' ? response.user : {};
      dispatch({ type: POST_LOGIN_USER, payload: loginUser });
      return response;
      
    } catch (error) {
      console.log(error);

    };
  };
};
