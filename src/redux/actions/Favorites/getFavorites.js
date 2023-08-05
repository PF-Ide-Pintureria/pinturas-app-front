import axios from "axios";
import { BASE_URL, GET_FAVORITES } from "../../action-type";

export const getFavorites = (id) => {
    return async (dispatch) => {
        try {

            let user = {
                "idUser": id
            }
            console.log('user', user)

            const response = (await axios.get(`${BASE_URL}favorites`, {id}));

            dispatch({type: GET_FAVORITES, payload: response});

            console.log('response getFavorites', response)
        } catch (error) {
            console.log('error getFavorites', error)
        }
    }
}