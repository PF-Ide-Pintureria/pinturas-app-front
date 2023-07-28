import axios from "axios";
import { POST_CONTACT_EMAIL, BASE_URL } from '../action-type';

export const postContactEmail = (email) => {
    return async (dispatch) => {
        const response = await axios.post(`${BASE_URL}mail/contact`, email);
        // const response = await axios.post(`https://back-server-pinturas-app-pr-53.onrender.com/mail/contact`, email);
        // const newEmail = response.status === 'success' ? response.product : {};
        dispatch({ type: POST_CONTACT_EMAIL, payload: email });
        return response;
    };
};