import axios from "axios";
import { PUT_PRODUCT } from '../action-type';

export const putProduct = (id) => {
    return async (dispatch) => {
        const productChange = (await axios.put(`http://localhost:3000/products/${id}`)).data;
        dispatch({ type: PUT_PRODUCT, payload: productChange });
    }
}