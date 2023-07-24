import { GET_ALL_PRODUCTS, SET_TOTAL_PAGES, BASE_URL } from "../action-type";
import axios from "axios";

export const allProducts = (page) => {
    return async (dispatch) => {
        try {
            if (!page) {
                const pages = (await axios.get(`${BASE_URL}products/`)).data.pages
                dispatch({ type: SET_TOTAL_PAGES, payload: pages })

                const products = (await axios.get(`${BASE_URL}products`)).data.results.rows;
                return dispatch({ type: GET_ALL_PRODUCTS, payload: products })

            } else if (page){
                const products = (await axios.get(`${BASE_URL}products?page=${page}`)).data.results.rows;
                return dispatch({ type: GET_ALL_PRODUCTS, payload: products })
            }

        } catch (error) {
        console.error(error);
        }
    };
};
