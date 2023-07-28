import { SET_CART } from '../action-type';

export const setCart = (cart) => ({
    type: SET_CART,
    payload: cart,
});