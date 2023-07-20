import { GET_ALL_PRODUCTS } from "../action-type";
import axios from "axios";

export const allProducts = () => {
    return async (dispatch) => {
        const all = (await axios.get('http://localhost:3000/products/')).data.products;
        dispatch({ type: GET_ALL_PRODUCTS, payload: all })
    }
}

