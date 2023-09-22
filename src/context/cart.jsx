import React, { useReducer, createContext } from 'react'
import { cartReducer, cartInitialState, CART_ACTION_TYPES } from '../reducers/cart'

export const CartContext = createContext()

function useCartReducer () {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) => cartDispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const addAllToCart = (products) => cartDispatch({
    type: CART_ACTION_TYPES.ADD_ALL_TO_CART,
    payload: products
  })

  const removeFromCart = (id) => cartDispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: id
  })

  const clearCart = () => cartDispatch({
    type: CART_ACTION_TYPES.CLEAR_CART
  })

  return {
    cartState,
    cartDispatch,
    addToCart,
    addAllToCart,
    removeFromCart,
    clearCart
  }
}

export function CartProvider ({ children }) {
  const { cartState, cartDispatch, addToCart, addAllToCart, removeFromCart, clearCart } = useCartReducer()

  return (
        <CartContext.Provider value={{
          cartState,
          cartDispatch,
          addToCart,
          addAllToCart,
          removeFromCart,
          clearCart
        }}>
            {children}
        </CartContext.Provider>
  )
};
