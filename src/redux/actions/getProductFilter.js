import { GET_CATEGORY_FILTER, BASE_URL } from "../action-type";
import axios from "axios";


export const getProductFilter = (
    category, 
    lowPrice, 
    highPrice, 
    minRating, 
    maxRating,
    minStock, 
    maxStock,
    limit, 
    page,
    color, 
    active,
    sortBy, 
    orderBy
    ) => {

    return async (dispatch) => {
        if ( !category, !lowPrice, !highPrice, !minRating, !maxRating, !minStock, !maxStock, !limit, !page,!color, !active, !sortBy, !orderBy) { // TODO
            const products = (await axios.get(`${BASE_URL}products`)).data.product;
            dispatch({ type: GET_CATEGORY_FILTER, payload: products })

        } else if (category && !lowPrice && !highPrice && !minRating && !maxRating && !minStock && !maxStock && !limit && !page && !color && !active && !sortBy && !orderBy){ // SOLO CATEGORY
            const products = (await axios.get(`${BASE_URL}products?category=${category}`)).data.product;
            dispatch({ type: GET_CATEGORY_FILTER, payload: products })

        } else if (category && lowPrice && !highPrice && !minRating && !maxRating && !minStock && !maxStock && !limit && !page && !color && !active && !sortBy && !orderBy){ // CATEGORY AND LOW PRICE
            const products = (await axios.get(`${BASE_URL}products?category=${category}&lowPrice=${lowPrice}`)).data.product;
            dispatch({ type: GET_CATEGORY_FILTER, payload: products })

        } else if (category && !lowPrice && highPrice && !minRating && !maxRating && !minStock && !maxStock && !limit && !page && !color && !active && !sortBy && !orderBy){ // CATEGORY AND HIGH PRICE
            const products = (await axios.get(`${BASE_URL}products?category=${category}&highPrice=${highPrice}`)).data.product;
            dispatch({ type: GET_CATEGORY_FILTER, payload: products })

        } else if (!category && !lowPrice && highPrice && !minRating && !maxRating && !minStock && !maxStock && !limit && !page && !color && !active && !sortBy && !orderBy){ // HIGH PRICE
            const products = (await axios.get(`${BASE_URL}products?highPrice=${highPrice}`)).data.product;
            dispatch({ type: GET_CATEGORY_FILTER, payload: products })

        } else if (!category && lowPrice && !highPrice && !minRating && !maxRating && !minStock && !maxStock && !limit && !page && !color && !active && !sortBy && !orderBy){ // LOW PRICE
            const products = (await axios.get(`${BASE_URL}products?lowPrice=${lowPrice}`)).data.product;
            dispatch({ type: GET_CATEGORY_FILTER, payload: products })

        } else if (!category && lowPrice && !highPrice && !minRating && !maxRating && !minStock && !maxStock && !limit && !page && !color && !active && !sortBy && !orderBy){ 
            const products = (await axios.get(`${BASE_URL}products?lowPrice=${lowPrice}`)).data.product;
            dispatch({ type: GET_CATEGORY_FILTER, payload: products })

        }
    }
}
