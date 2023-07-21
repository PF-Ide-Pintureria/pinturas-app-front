import { GET_ALL_PRODUCTS, BASE_URL } from "../action-type";
import axios from "axios";

export const productByName = (name) => {
    return async (dispatch) => {
        const product = (await axios.get(`${BASE_URL}products/?name=${name}`)).data.products;
        dispatch({ type: GET_ALL_PRODUCTS, payload: product })
    }
}