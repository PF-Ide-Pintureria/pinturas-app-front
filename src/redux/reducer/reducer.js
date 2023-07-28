import {
    //PRODUCTS
    GET_ALL_PRODUCTS,
    DELETE_PRODUCT,
    POST_PRODUCT,
    PUT_PRODUCT,
    GET_PRODUCT_BY_ID,
    GET_PRODUCT_BY_NAME,

    //CATEGORIES
    GET_ALL_CATEGORIES,

    //USERS
    POST_REGISTER_USER,
    POST_LOGIN_USER,
    GET_ALL_USERS,
    DELETE_USER,
    PUT_USER,

    //FILTERS
    GET_PRODUCT_FILTER,
    GET_BEST_SELL,
    SET_CATEGORY,
    SET_LOW_PRICE,
    SET_HIGH_PRICE,

    //PAGES
    SET_TOTAL_PAGES,
    SET_PAGE,

    SET_CART,

    //NODE MAILER
    POST_CONTACT_EMAIL,
    POST_ORDER_EMAIL,
    POST_REGISTER_EMAIL,
    LOGOUT_USER,

} from "../action-type";

const initialState = {
    //PRODUCTS
    products: [],
    detail: {},

    //CATEGORIES
    categories: [],

    //USER
    user: {},
    allUsers: {},

    //FILTERS
    bestSell: [],
    filterCategory: "",
    price: {
        high: 0,
        low: 0
    },

    //PAGES
    totalPages: 0,
    thisPage: 1,
    cart: [],

    //MAIL
    mail: {},
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        //USER
        case GET_ALL_PRODUCTS:
            return { ...state, products: payload }
        case DELETE_PRODUCT:
            return { ...state, products: payload }
        case POST_PRODUCT:
            return { ...state, products: payload }
        case PUT_PRODUCT:
            return { ...state, products: payload }
        case GET_PRODUCT_BY_ID:
            return { ...state, detail: payload }
        case GET_PRODUCT_BY_NAME:
            return { ...state, products: payload }

        //CATEGORIES
        case GET_ALL_CATEGORIES:
            return { ...state, categories: payload }

        //USER
        case POST_REGISTER_USER:
            return { ...state, user: payload }
        case POST_LOGIN_USER:
            return { ...state, user: payload }
        case GET_ALL_USERS:
            return { ...state, allUsers: payload }
        case DELETE_USER:
            return { ...state, allUsers: payload }
        case PUT_USER:
            return { ...state, allUsers: payload }
        case LOGOUT_USER:
            return { ...state, user: payload }

        //FILTERS
        case GET_PRODUCT_FILTER:
            return { ...state, products: payload }
        case GET_BEST_SELL:
            return { ...state, bestSell: payload }
        case SET_CATEGORY:
            return { ...state, filterCategory: payload }
        case SET_HIGH_PRICE:
            return { ...state, price: { ...state.price, high: payload } }
        case SET_LOW_PRICE:
            return { ...state, price: { ...state.price, low: payload } }

        //PAGES
        case SET_TOTAL_PAGES:
            return { ...state, totalPages: payload }
        case SET_PAGE:
            return { ...state, thisPage: payload }

        case SET_CART:
            return { ...state, cart: [...state.cart, payload] }

        //NODE MAILER
        case POST_CONTACT_EMAIL:
            return { ...state, mail: payload }
        case POST_ORDER_EMAIL:
            return { ...state, mail: payload }
        case POST_REGISTER_EMAIL:
            return { ...state, mail: payload }

        default:
            return { ...state }
    }
}

export default reducer;