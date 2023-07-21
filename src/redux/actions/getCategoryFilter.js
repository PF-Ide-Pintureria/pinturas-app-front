import { GET_CATEGORY_FILTER } from "../action-type";
import axios from "axios";

export const getCategoryFilter = (category, lowPrice, highPrice) => {
    return async (dispatch) => {
        if (category && lowPrice && highPrice) {
            const products = (await axios.get(`https://back-server-pinturas-app.onrender.com/products?category=${category}&lowPrice=${lowPrice}&highPrice=${highPrice}`)).data.product;
            dispatch({ type: GET_CATEGORY_FILTER, payload: products })

        } else if( category && lowPrice && !highPrice){
            const products = (await axios.get(`https://back-server-pinturas-app.onrender.com/products?category=${category}&lowPrice=${lowPrice}`)).data.product;
            dispatch({ type: GET_CATEGORY_FILTER, payload: products })

        } else if (category && highPrice && !lowPrice){
            const products = (await axios.get(`https://back-server-pinturas-app.onrender.com/products?category=${category}&highPrice=${highPrice}`)).data.product;
            dispatch({ type: GET_CATEGORY_FILTER, payload: products })

        } else if (category && !highPrice && !lowPrice){
            const products = (await axios.get(`https://back-server-pinturas-app.onrender.com/products?category=${category}`)).data.product;
            dispatch({ type: GET_CATEGORY_FILTER, payload: products })

        } else if (!category && highPrice && !lowPrice){
            const products = (await axios.get(`https://back-server-pinturas-app.onrender.com/products?highPrice=${highPrice}`)).data.product;
            dispatch({ type: GET_CATEGORY_FILTER, payload: products })

        } else if (!category && !highPrice && lowPrice){
            const products = (await axios.get(`https://back-server-pinturas-app.onrender.com/products?lowPrice=${lowPrice}`)).data.product;
            dispatch({ type: GET_CATEGORY_FILTER, payload: products })

        } else if (!category && highPrice && lowPrice){
            const products = (await axios.get(`https://back-server-pinturas-app.onrender.com/products?lowPrice=${lowPrice}&highPrice=${highPrice}`)).data.product;
            dispatch({ type: GET_CATEGORY_FILTER, payload: products })
        }
    }
}
