import axios from "axios";
import { BASE_URL, POST_POST } from "../../action-type";

const postPost = (formData, userId) => {
    return async (dispatch) => {
        console.log('formData en el action: ', formData)
        console.log('idUser', userId)
        try {
            const rawResponse = await axios.post(`${BASE_URL}blogs/${userId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log("rawResponse", rawResponse);
            const middleResponse = rawResponse?.data;
            console.log("middleResponse", middleResponse);
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