import axios from "axios";
import { BASE_URL, GET_POST_BY_ID } from "../../action-type";

const getPostById = (idPost) => {
    return async (dispatch) => {
        try {
            const rawResponse = await axios.get(`${BASE_URL}blogs/details/${idPost}`);
            console.log("rawResponse detail blog", rawResponse);
            const middleResponse = rawResponse?.data;
            console.log("middleResponse detail:", middleResponse);
            const response = middleResponse?.blog;
            if (response) {
                dispatch({
                    type: GET_POST_BY_ID,
                    payload: response
                });
                return response
            }
        } catch (error) {
            console.error(error);
        }
    }

}

export default getPostById;