import { ADD_CART } from '../../action-type';

export const addCart = (cart) => {
    return {type: ADD_CART, payload: cart}
};