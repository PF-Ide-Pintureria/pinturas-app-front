import { GET_PRODUCT } from "../action-type";
import axios from "axios";

export const getCategoryFilter = (category, lowPrice, highPrice) => {
    return async (dispatch) => {
        if (category && lowPrice && highPrice) {
            const product = (await axios.get(`http://localhost:3000/products?category=${category}&lowPrice=${lowPrice}&highPrice=${highPrice}`)).data.product;
            dispatch({ type: GET_PRODUCT, payload: product })

        } else if( category && lowPrice && !highPrice){
            const product = (await axios.get(`http://localhost:3000/products?category=${category}&lowPrice=${lowPrice}`)).data.product;
            dispatch({ type: GET_PRODUCT, payload: product })

        } else if (category && highPrice && !lowPrice){
            const product = (await axios.get(`http://localhost:3000/products?category=${category}&highPrice=${highPrice}`)).data.product;
            dispatch({ type: GET_PRODUCT, payload: product })

        } else if (category && !highPrice && !lowPrice){
            const product = (await axios.get(`http://localhost:3000/products?category=${category}`)).data.product;
            dispatch({ type: GET_PRODUCT, payload: product })

        } else if (!category && highPrice && !lowPrice){
            const product = (await axios.get(`http://localhost:3000/products?highPrice=${highPrice}`)).data.product;
            dispatch({ type: GET_PRODUCT, payload: product })

        } else if (!category && !highPrice && lowPrice){
            const product = (await axios.get(`http://localhost:3000/products?lowPrice=${lowPrice}`)).data.product;
            dispatch({ type: GET_PRODUCT, payload: product })

        } else if (!category && highPrice && lowPrice){
            const product = (await axios.get(`http://localhost:3000/products?lowPrice=${lowPrice}&highPrice=${highPrice}`)).data.product;
            dispatch({ type: GET_PRODUCT, payload: product })
        }
    }
}
