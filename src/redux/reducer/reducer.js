import {
  // PRODUCTS
  GET_ALL_PRODUCTS,
  DELETE_PRODUCT,
  POST_PRODUCT,
  PUT_PRODUCT,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_NAME,
  GET_ALL_PRODUCTS_NO_FILTER,

  // CATEGORIES
  GET_ALL_CATEGORIES,

  // USERS
  POST_REGISTER_USER,
  POST_LOGIN_USER,
  GET_ALL_USERS,
  DELETE_USER,
  PUT_USER,
  ACCESS_TOKEN,
  SET_USER,

  // FILTERS
  GET_PRODUCT_FILTER,
  GET_BEST_SELL,
  SET_CATEGORY,
  SET_LOW_PRICE,
  SET_HIGH_PRICE,

  // PAGES
  SET_TOTAL_PAGES,
  SET_PAGE,

  // CART
  SET_CART,
  POST_CART,
  GET_CART_ID,
  GET_CART,
  PUT_CART,
  ADD_CART,

  // ORDERS
  GET_ALL_ORDERS,
  GET_ORDERS_USER,
  GET_ORDER_BY_ID,
  POST_ORDER_PAYMENT,
  PUT_ORDER,

  // NODE MAILER
  POST_CONTACT_EMAIL,
  POST_ORDER_EMAIL,
  POST_REGISTER_EMAIL,
  LOGOUT_USER,

  // AUTH0-USERS-INFO
  SET_USER_DATA,
  GET_USER_BY_ID,

  // BLOG
  GET_POSTS,
  GET_POST_BY_ID,
  DELETE_POST,
  PUT_POST,
  POST_POST,

  // FAVORITES
  ADD_FAVORITE,
  GET_FAVORITES,
  DELETE_FAVORITES,

  // REVIEWS
  SAVE_REVIEW

} from '../action-type'

const initialState = {
  // CART
  cart: [],
  sendCart: {},
  cartID: '',
  GET_CART: [],

  // ORDERS
  allOrders: [],
  newOrder: {},
  payment: '',

  // PRODUCTS
  products: [],
  detail: {},
  allProducts: [],

  // CATEGORIES
  categories: [],

  // USER
  user: {},
  allUsers: [],
  token: '',
  userId: {},

  // FILTERS
  bestSell: [],
  filterCategory: '',
  price: {
    high: 0,
    low: 0
  },

  // PAGES
  totalPages: 0,
  thisPage: 1,

  // MAIL
  mail: {},

  // ORDERS
  initPoint: '',
  ordersUser: {},
  orderDetail: {},

  // AUTH0-USERS-INFO
  userData: {},

  // REVIEWS
  userReview: {},

  // BLOG
  posts: [],
  post: {},

  // FAVORITES
  favorites: [],
  allFavorites: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // PRODUCTS
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
    case GET_ALL_PRODUCTS_NO_FILTER:
      return { ...state, allProducts: payload }

    // CATEGORIES
    case GET_ALL_CATEGORIES:
      return { ...state, categories: payload }

    // USER
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
    case ACCESS_TOKEN:
      return { ...state, token: payload }
    case SET_USER:
      return { ...state, user: payload }
    case GET_USER_BY_ID:
      return { ...state, userId: payload }

    // FILTERS
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

    // PAGES
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: payload }
    case SET_PAGE:
      return { ...state, thisPage: payload }

    // CART
    case SET_CART: {
      const productoExistente = state.cart.find(item => item.id === payload.id)

      if (productoExistente) {
        return {
          ...state,
          cart: state?.cart?.map(item => item.id === payload.id ? { ...item, quantity: item.quantity + payload.quantity } : item
          )
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, payload]
        }
      }
    }
    case POST_CART:
      return { ...state, sendCart: payload }
    case GET_CART_ID:
      return { ...state, cartID: payload }
    case GET_CART:
      return { ...state, cart: payload }
    case PUT_CART:
      return { ...state, cart: payload }
    case ADD_CART:
      return { ...state, cart: [...state.cart, ...payload] }

    case GET_ALL_ORDERS:
      return { ...state, allOrders: payload }

    // NODE MAILER
    case POST_CONTACT_EMAIL:
      return { ...state, mail: payload }
    case POST_ORDER_EMAIL:
      return { ...state, mail: payload }
    case POST_REGISTER_EMAIL:
      return { ...state, mail: payload }

    // ORDERS
    case POST_ORDER_PAYMENT:
      return { ...state, initPoint: payload }
    case GET_ORDERS_USER:
      return { ...state, ordersUser: payload }
    case GET_ORDER_BY_ID:
      return { ...state, orderDetail: payload }
    case PUT_ORDER:
      return { ...state, orderDetail: payload }

    // AUTH0-USERS-INFO
    case SET_USER_DATA:
      return { ...state, userData: payload }

    // BLOG
    case GET_POSTS:
      return { ...state, posts: payload }
    case GET_POST_BY_ID:
      return { ...state, post: payload }
    case PUT_POST:
      return { ...state, posts: payload }
    case DELETE_POST:
      return { ...state, posts: payload }
    case POST_POST:
      return { ...state, posts: payload }

    // REVIEWS
    case SAVE_REVIEW:
      return { ...state, userReview: payload }

    // FAVORITES
    case ADD_FAVORITE:
      return { ...state, favorites: payload }
    case GET_FAVORITES:
      return { ...state, allFavorites: payload }
    case DELETE_FAVORITES:
      return { ...state, allFavorites: payload }

    default:
      return { ...state }
  }
}

export default reducer
