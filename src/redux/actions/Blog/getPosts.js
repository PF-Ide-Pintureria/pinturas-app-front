import axios from "axios";
import { BASE_URL, GET_POSTS } from "../../action-type";

const getPosts = () => {
    return async (dispatch) => {
        try {
            const rawResponse = await axios.get(`${BASE_URL}blogs`);
            console.log('rawResponse', rawResponse);
            const middleResponse = rawResponse?.data;
            console.log('middleResponse', middleResponse);
            const response = middleResponse.blogs;
            console.log('response', response)
            if (response) {
                dispatch({
                    type: GET_POSTS,
                    payload: response
                })
            }
            else {
                console.log('hubo un error')
            }
        } catch (error) {
            console.error(error);
        }

    }
}

export default getPosts;