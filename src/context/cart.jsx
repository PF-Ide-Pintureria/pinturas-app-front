import { useReducer, createContext } from "react";
import { cartReducer, cartInitialState, CART_ACTION_TYPES } from "../reducers/cart";
import React from "react";


export const CartContext = createContext();

function useCartReducer() {

    const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

    const addToCart = (product) => cartDispatch({
        type: CART_ACTION_TYPES.ADD_TO_CART,
        payload: product
    });

    const removeFromCart = (product) => cartDispatch({
        type: CART_ACTION_TYPES.REMOVE_FROM_CART,
        payload: product
    });

    const clearCart = () => cartDispatch({
        type: CART_ACTION_TYPES.CLEAR_CART
    });

    return {
        cartState,
        cartDispatch,
        addToCart,
        removeFromCart,
        clearCart
    };

}

export function CartProvider({ children }) {

    const { cartState, cartDispatch, addToCart, removeFromCart, clearCart } = useCartReducer();

    return (
        <CartContext.Provider value={{
            cartState,
            cartDispatch,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};
