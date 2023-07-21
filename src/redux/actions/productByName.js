import { GET_ALL_PRODUCTS } from "../action-type";
import axios from "axios";

export const productByName = (name) => {
    return async (dispatch) => {
        const product = (await axios.get(`https://back-server-pinturas-app.onrender.comproducts/?name=${name}`)).data.products;
        dispatch({ type: GET_ALL_PRODUCTS, payload: product })
    }
}