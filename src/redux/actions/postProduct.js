import axios from "axios";
import { POST_PRODUCT } from '../action-type';

export const postProduct = (form) => {
    return async (dispatch) => {
        const newProduct = (await axios.post("https://back-server-pinturas-app.onrender.com/products", form)).data;
        dispatch({ type: POST_PRODUCT, payload: newProduct });
    }
}