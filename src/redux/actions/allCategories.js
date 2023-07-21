import { GET_ALL_CATEGORIES } from "../action-type";
import axios from "axios";

export const allCategories = () => {
    return async (dispatch) => {
        const all = (await axios.get('https://back-server-pinturas-app.onrender.com/categories/')).data;
        dispatch({ type: GET_ALL_CATEGORIES, payload: all })
    }
}