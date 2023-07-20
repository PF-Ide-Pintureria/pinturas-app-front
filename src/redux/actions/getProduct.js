import { GET_PRODUCT } from "../action-type";
import axios from "axios";

export const getProduct = (id) => {
    return async (dispatch) => {
        const product = (await axios.get(`http://localhost:3000/details/${id}`)).data.product;
        dispatch({ type: GET_PRODUCT, payload: product })
    }
}
