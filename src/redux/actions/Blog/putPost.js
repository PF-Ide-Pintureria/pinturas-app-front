import axios from "axios";
import { BASE_URL, PUT_POST } from "../../action-type";

const putPost = (formData, { id }) => {
    return async (dispatch) => {
        console.log('formData en el action', formData);
        console.log("idBlog en el action:", id)
        try {
            const rawResponse = await axios.put(`${BASE_URL}blogs/${id}`, formData, {
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
                    type: PUT_POST,
                    payload: response
                })
                return response
            }

        } catch (error) {
            console.error(error)
        }
    }
}


export default putPost;