import { GET_ALL_USERS, BASE_URL } from "../action-type";
import axios from "axios";

export const getAllUsers = () => {
    return async (dispatch) => {
        try {

            const rawResponse = (await axios.get(`${BASE_URL}users/`)).data;
            console.log('rawResponse: ', rawResponse);
            const response = rawResponse?.users;
            console.log('response: ', response)

            return dispatch({ type: GET_ALL_USERS, payload: response });

        } catch (error) {
            console.error(error);

        }
    };
};