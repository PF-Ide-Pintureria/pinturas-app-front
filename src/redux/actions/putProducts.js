import axios from "axios";
import { PUT_PRODUCT } from '../action-type';

export const putProduct = (id) => {
    return async (dispatch) => {
        const productChange = (await axios.put(`https://back-server-pinturas-app.onrender.com/products/${id}`)).data;
        dispatch({ type: PUT_PRODUCT, payload: productChange });
    }
}