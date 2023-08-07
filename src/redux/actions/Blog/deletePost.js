import axios from "axios";
import { BASE_URL, DELETE_POST } from "../../action-type";

const deletePost = (idBlog) => {
    try {
        return async (dispatch) => {
            const rawResponse = axios.delete(`${BASE_URL}blogs/${idBlog}`)
            const data = rawResponse?.data;
            const response = data?.blog;
            if (response) {
                dispatch({
                    type: DELETE_POST,
                    payload: response
                })
                return response;
            }
        }
    } catch (error) {
        console.error(error);
    }

}

export default deletePost;