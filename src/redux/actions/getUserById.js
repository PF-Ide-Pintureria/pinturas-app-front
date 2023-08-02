import axios from "axios";
import { BASE_URL, GET_USER_BY_ID } from "../action-type";

const getUserById = (idUser) => {
    return async (dispatch) => {
        try {

            const rawResponse = await axios.get(`${BASE_URL}users/${idUser}`);
            const responseData = rawResponse?.data;
            const response = responseData?.users;

            return dispatch({ type: GET_ALL_USERS, payload: response });

        } catch (error) {
            console.error(error);

        }
    };
}