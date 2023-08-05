import axios from "axios";
import { BASE_URL, GET_POST_BY_ID } from "../../action-type";

const getPostById = (idBlog) => {
    return async (dispatch) => {
        try {
            const response = (await axios.get(`${BASE_URL}/blogs/details/${idBlog}`)).data
            if (response) {
                dispatch({
                    type: GET_POST_BY_ID,
                    payload: response.blog
                });
                return response
            }
        } catch (error) {
            console.error(error);
        }
    }

}

export default getPostById;