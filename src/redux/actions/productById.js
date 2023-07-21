import { GET_PRODUCT } from "../action-type";
import axios from "axios";

export const productById = (id) => {
    return async (dispatch) => {
        const product = (await axios.get(`https://back-server-pinturas-app.onrender.com/details/${id}`)).data.product;
        dispatch({ type: GET_PRODUCT, payload: product })
    }
}
