import { GET_CART, BASE_URL } from '../../action-type';
import axios from 'axios';

export const getCart = (idUser) => {
    return async (dispatch) => {
        try {
            const response = (await axios.get(`${BASE_URL}carts?idUser=${idUser}`)).data;
            let parsed = response.cart.products.map((product) => JSON.parse(product))
            const cart = parsed;
            
            console.log('response cart', cart)
            dispatch({ type: GET_CART, payload: cart });

        } catch (error) {
            console.log('error getCart', error)

        }
    }
};