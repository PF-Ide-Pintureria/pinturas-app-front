import axios from "axios";
import { PUT_PRODUCT, BASE_URL } from '../action-type';

export const putProduct = (id) => {
    return async (dispatch) => {
        const productChange = (await axios.put(`${BASE_URL}products/${id}`)).data;
        dispatch({ type: PUT_PRODUCT, payload: productChange });
    }
}