import { GET_ALL_PRODUCTS, BASE_URL } from "../action-type";
import axios from "axios";

export const allProducts = () => {
    return async (dispatch) => {
        const all = (await axios.get(`${BASE_URL}products/`)).data.results.rows;
        dispatch({ type: GET_ALL_PRODUCTS, payload: all })
    }
}

