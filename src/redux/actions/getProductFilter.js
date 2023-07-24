import { GET_PRODUCT_FILTER, SET_TOTAL_PAGES, BASE_URL } from "../action-type";
import axios from "axios";


export const getProductFilter = (
    category, page
    // lowPrice, 
    // highPrice, 
    // minRating, 
    // maxRating, 
    // minStock, 
    // maxStock, 
    // limit, 
    // page, 
    // color, 
    // active, 
    // sortBy, 
    // orderBy
    ) => {

    return async (dispatch) => {
        try {
            if (category && !page
                // || lowPrice || highPrice || orderBy
                ){
                const response = await axios.get(`${BASE_URL}products?active=true&category=${category}`);
                const pages = response.data.pages;
                const products = response.data.results.rows;
                
                dispatch({ type: SET_TOTAL_PAGES, payload: pages })
                return dispatch({ type: GET_PRODUCT_FILTER, payload: products });

            } else if (category && page) {
                const products = (await axios.get(`${BASE_URL}products?active=true&category=${category}&page=${page}`)).data.results.rows;
                return dispatch({ type: GET_PRODUCT_FILTER, payload: products });
            }
            
        } catch (error) {
            console.log(error)

        }
    }
}

// if ( !category, !lowPrice, !highPrice, !minRating, !maxRating, !minStock, !maxStock, !limit, !page,!color, !active, !sortBy, !orderBy) { // TODO
//     const products = (await axios.get(`${BASE_URL}products`)).data.product;
//     dispatch({ type: GET_PRODUCT_FILTER, payload: products })

// } else if (category && !lowPrice && !highPrice && !minRating && !maxRating && !minStock && !maxStock && !limit && !page && !color && !active && !sortBy && !orderBy){ // SOLO CATEGORY
//     const products = (await axios.get(`${BASE_URL}products?category=${category}`)).data.product;
//     dispatch({ type: GET_PRODUCT_FILTER, payload: products })

// } else if (category && lowPrice && !highPrice && !minRating && !maxRating && !minStock && !maxStock && !limit && !page && !color && !active && !sortBy && !orderBy){ // CATEGORY AND LOW PRICE
//     const products = (await axios.get(`${BASE_URL}products?category=${category}&lowPrice=${lowPrice}`)).data.product;
//     dispatch({ type: GET_PRODUCT_FILTER, payload: products })

// } else if (category && !lowPrice && highPrice && !minRating && !maxRating && !minStock && !maxStock && !limit && !page && !color && !active && !sortBy && !orderBy){ // CATEGORY AND HIGH PRICE
//     const products = (await axios.get(`${BASE_URL}products?category=${category}&highPrice=${highPrice}`)).data.product;
//     dispatch({ type: GET_PRODUCT_FILTER, payload: products })

// } else if (!category && !lowPrice && highPrice && !minRating && !maxRating && !minStock && !maxStock && !limit && !page && !color && !active && !sortBy && !orderBy){ // HIGH PRICE
//     const products = (await axios.get(`${BASE_URL}products?highPrice=${highPrice}`)).data.product;
//     dispatch({ type: GET_PRODUCT_FILTER, payload: products })

// } else if (!category && lowPrice && !highPrice && !minRating && !maxRating && !minStock && !maxStock && !limit && !page && !color && !active && !sortBy && !orderBy){ // LOW PRICE
//     const products = (await axios.get(`${BASE_URL}products?lowPrice=${lowPrice}`)).data.product;
//     dispatch({ type: GET_PRODUCT_FILTER, payload: products })

// } else if (!category && lowPrice && !highPrice && !minRating && !maxRating && !minStock && !maxStock && !limit && !page && !color && !active && !sortBy && !orderBy){ 
//     const products = (await axios.get(`${BASE_URL}products?lowPrice=${lowPrice}`)).data.product;
//     dispatch({ type: GET_PRODUCT_FILTER, payload: products })
