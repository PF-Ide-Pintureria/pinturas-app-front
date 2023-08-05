import { GET_CART, BASE_URL } from '../../action-type';
import axios from 'axios';

export const getCart = (cartId) => {
    return async (dispatch) => {
        try {
            const response = (await axios.get(`${BASE_URL}carts`, cartId)).data;

            const cart = response.cart;
            // const products = cart.products;
            // console.log('cart', cart.products)

            dispatch({ type: GET_CART, payload: [cart] });

        } catch (error) {
            console.log('error getCart', error)

        }
    }
};