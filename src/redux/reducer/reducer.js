import { 
    GET_ALL_PRODUCTS,
    GET_ALL_CATEGORIES,
    DELETE_PRODUCT,
    GET_PRODUCT_FILTER,
    POST_PRODUCT,
    GET_PRODUCT_BY_ID,
    GET_PRODUCT_BY_NAME,
    PUT_PRODUCT
} from "../action-type";

const initialState = {
    products: [],
    categories: [],
    detail: {}
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {...state, products: payload}
        case GET_ALL_CATEGORIES:
            return {...state, categories: payload}
        case DELETE_PRODUCT:
            return {...state, products: payload}
        case GET_PRODUCT_FILTER:
            return {...state, products: payload}
        case POST_PRODUCT:
            return {...state, products: payload}
        case GET_PRODUCT_BY_ID:
            return {...state, detail: payload}
        case GET_PRODUCT_BY_NAME:
            return {...state, products: payload}
        case PUT_PRODUCT:
            return {...state, products: payload}
        default:
            return { ...state }
    }
}

export default reducer;