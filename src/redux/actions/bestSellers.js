import { GET_BEST_SELL, BASE_URL } from "../action-type";
import axios from "axios";

const limit = 4

export const productById = () => {
    return async (dispatch) => {
        const product = (await axios.get(`${BASE_URL}/products?minRating=5&limit=${limit}`)).data.product;
        dispatch({ type: GET_BEST_SELL, payload: product });
    };
};
