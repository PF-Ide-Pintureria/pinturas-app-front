import { 
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    GET_ALL_CATEGORIES,
    DELETE_PRODUCT,
    POST_PRODUCT,
    PUT_PRODUCT
} from "../action-type";

const initialState = {
    products: [],
    detail: {}
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {...state, products: payload}
        case GET_PRODUCT:
            return {...state, detail: payload}
        case GET_ALL_CATEGORIES:
            return {...state, products: payload}
        case DELETE_PRODUCT:
            return {...state, products: payload}
        case POST_PRODUCT:
            return {...state, products: payload}
        case PUT_PRODUCT:
            return {...state, products: payload}
        default:
            return { ...state }
    }
}

export default reducer;