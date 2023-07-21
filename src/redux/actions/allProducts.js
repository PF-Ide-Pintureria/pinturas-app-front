import { GET_ALL_PRODUCTS } from "../action-type";
import axios from "axios";

export const allProducts = () => {
    return async (dispatch) => {
        const all = (await axios.get('https://back-server-pinturas-app.onrender.com/products/')).data.products;
        dispatch({ type: GET_ALL_PRODUCTS, payload: all })
    }
}

