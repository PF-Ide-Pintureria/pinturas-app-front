import axios from "axios";
import { POST_PRODUCT, BASE_URL } from '../action-type';

export const postProduct = (productCreate) => {
    return async (dispatch) => {
        const response = await axios.post(`${BASE_URL}products`, productCreate)
        const newProduct = response.status === 'success' ? response.producto : {};
        dispatch({ type: POST_PRODUCT, payload: newProduct });
        return response;
    };
};
