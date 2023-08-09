import axios from "axios";
import { BASE_URL, POST_POST } from "../../action-type";

const postPost = (formData) => {
    return async (dispatch) => {
        const rawToken = localStorage.getItem("token");
        const token = rawToken.trim();
        try {
            console.log('token', token);
            console.log('rawToken', rawToken);
            const rawResponse = await axios.post(`${BASE_URL}blogs`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': localStorage.getItem("token")
                }
            })
            console.log('response', rawResponse);
            const middleResponse = rawResponse?.data;
            const response = middleResponse?.blog

            if (response) {
                dispatch({
                    type: POST_POST,
                    payload: response,
                })
                return response;
            }

        } catch (error) {
            console.error(error);
        }
    }
}

export default postPost;