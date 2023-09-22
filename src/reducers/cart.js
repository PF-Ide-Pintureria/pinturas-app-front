export const cartInitialState = JSON.parse(localStorage.getItem('cart') || '[]')

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  ADD_ALL_TO_CART: 'ADD_ALL_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = state => {
  localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { product, quantity } = action.payload

      const productInCart = state.find(item => item.id === product.id)

      if (productInCart) {
        productInCart.quantity += quantity

        updateLocalStorage(state)

        return [...state]
      } else {
        updateLocalStorage([...state, { ...product, quantity }])
        return [...state, { ...product, quantity }]
      }
    }
    case CART_ACTION_TYPES.ADD_ALL_TO_CART: {
      const products = action.payload
      const stateCopy = [...state]

      products.forEach(product => {
        const prod = stateCopy.find(item => item.id === product.id)
        if (prod) prod.quantity += product.quantity
        else stateCopy.push(product)
      })

      updateLocalStorage(stateCopy)
      return [...stateCopy]
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const id = action.payload

      console.log('id N56', id)
      const stateCopiado = [...state].filter(item => item.id !== id)

      updateLocalStorage(stateCopiado)
      console.log('state', state)
      return stateCopiado
    }

    case CART_ACTION_TYPES.CLEAR_CART:

      return []

    default:

      return state
  }
}
