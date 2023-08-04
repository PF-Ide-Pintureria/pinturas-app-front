import axios from "axios";
import { BASE_URL, GET_POSTS } from "../../action-type";

const getPosts = () => {
    return async (dispatch) => {
        try {
            const response = (await axios.get(`${BASE_URL}/blog`)).data
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