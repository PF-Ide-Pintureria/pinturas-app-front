import axios from "axios";
import { BASE_URL, POST_POST } from "../../action-type";

const postPost = (formData) => {
    return async (dispatch) => {
        console.log('formData en el action: ', formData)
        try {
            const rawResponse = await axios.post(`${BASE_URL}blogs`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            const middleResponse = rawResponse?.data;

            const response = middleResponse?.blog
            console.log('response en el action: ', response)
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