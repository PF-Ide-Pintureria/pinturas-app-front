import { 
    GET_ALL_PRODUCTS,
    GET_ALL_CATEGORIES,
    GET_PRODUCT_FILTER,
    GET_PRODUCT_BY_ID,
    GET_PRODUCT_BY_NAME,
    GET_BEST_SELL,
    DELETE_PRODUCT,
    POST_PRODUCT,
    PUT_PRODUCT,
    SET_TOTAL_PAGES,
    SET_PAGE,
    SET_CATEGORY,
    SET_LOW_PRICE,
    SET_HIGH_PRICE
} from "../action-type";

const initialState = {
    products: [],
    categories: [],
    detail: {},
    bestSell: [],
    totalPages: 0,
    thisPage: 1,
    filterCategory: "",
    price: {
        high: 0,
        low: 0
    }
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
        case GET_BEST_SELL:
            return { ...state, bestSell: payload}
        case SET_TOTAL_PAGES:
            return {...state, totalPages: payload}
        case SET_PAGE:
            return { ...state, thisPage: payload}
        case SET_CATEGORY:
            return { ...state, filterCategory: payload}
        case SET_HIGH_PRICE:
            return { ...state, price: {...state.price, high: payload}}
        case SET_LOW_PRICE:
            return { ...state, price: {...state.price, low: payload}}
        default:
            return { ...state }
    }
}

export default reducer;