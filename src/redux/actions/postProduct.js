import axios from "axios";
import { POST_PRODUCT, BASE_URL } from '../action-type';

export const postProduct = (form) => {
    return async (dispatch) => {
        const newProduct = (await axios.post(`${BASE_URL}/products`, form)).data;
        dispatch({ type: POST_PRODUCT, payload: newProduct });
    }
}