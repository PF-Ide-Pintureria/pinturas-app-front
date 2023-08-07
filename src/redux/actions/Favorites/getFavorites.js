import axios from "axios";
import { BASE_URL, GET_FAVORITES } from "../../action-type";

export const getFavorites = (id) => {
    return async (dispatch) => {
        // console.log('id', id);
        try {

            let user = {
                "idUser": id
            };
            // console.log('user', user);

            const response = (await axios.post(`${BASE_URL}favorites/user`, user)).data;
            dispatch({ type: GET_FAVORITES, payload: response });

            // console.log('response getFavorites', response);
        } catch (error) {
            // console.log('error getFavorites', error);
        }
    };
};
