import { GET_ALL_PRODUCTS, SET_TOTAL_PAGES, BASE_URL } from "../action-type";
import axios from "axios";

export const allProducts = (page, category, orderBy, highPrice, lowPrice ) => {
    return async (dispatch) => {
        try {
            if (!page && !category && !highPrice && !lowPrice && !orderBy ) {
                const pages = (await axios.get(`${BASE_URL}products/`)).data.pages
                dispatch({ type: SET_TOTAL_PAGES, payload: pages })
                const products = (await axios.get(`${BASE_URL}products`)).data.results.rows;
                return dispatch({ type: GET_ALL_PRODUCTS, payload: products })
            } else if (page && !category && !orderBy && !highPrice && !lowPrice ){
                const products = (await axios.get(`${BASE_URL}products?page=${page}`)).data.results.rows;
                return dispatch({ type: GET_ALL_PRODUCTS, payload: products })
            } else if (category || highPrice || lowPrice || orderBy){
                const params = {
                    category, highPrice, lowPrice, orderBy
                };
                const response = await axios.get(`${BASE_URL}products`, { params });
                const pages = response.data.pages;
                const products = response.data.results.rows;
                
                dispatch({ type: SET_TOTAL_PAGES, payload: pages })
                dispatch({ type: GET_ALL_PRODUCTS, payload: products });
            }

        } catch (error) {
        console.error(error);
        }
    };
};
