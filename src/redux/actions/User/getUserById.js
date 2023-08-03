import axios from "axios";
import { BASE_URL, GET_USER_BY_ID } from "../../action-type";

const getUserById = (idUser) => {
    return async (dispatch) => {
        try {

            const rawResponse = await axios.get(`${BASE_URL}users/${idUser}`);
            console.log('rawResponse: ', rawResponse)
            const responseData = rawResponse?.data;
            const response = responseData?.usuario;
            console.log('user: ', response)

            return dispatch({ type: GET_USER_BY_ID, payload: response });

        } catch (error) {
            console.error(error);

        }
    };
}

export default getUserById
