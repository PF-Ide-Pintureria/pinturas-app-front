import axios from "axios";
import { POST_REGISTER_EMAIL, BASE_URL } from '../action-type';

export const postRegisterEmail = (userMailContent) => {
    return async (dispatch) => {
        const response = await axios.post(`${BASE_URL}mail/register/${userMailContent.id}`, userMailContent);
        // const response = await axios.post(`https://back-server-pinturas-app-pr-53.onrender.com/mail/register/${userMailContent.id}`, userMailContent);
        dispatch({ type: POST_REGISTER_EMAIL, payload: userMailContent });
        return response;
    };
};