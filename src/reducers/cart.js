export const cartInitialState = JSON.parse(localStorage.getItem('cart') || '[]');

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
};

export const updateLocalStorage = state => {
    localStorage.setItem('cart', JSON.stringify(state));
};

export const cartReducer = (state = cartInitialState, action) => {

    switch (action.type) {

        case CART_ACTION_TYPES.ADD_TO_CART:

            const { product, quantity } = action.payload;

            const productInCart = state.find(item => item.id === product.id);

            if (productInCart) {

                productInCart.quantity += quantity;

                updateLocalStorage(state);

                return [...state];

            } else {
                updateLocalStorage([...state, { ...product, quantity }]);
                return [...state, { ...product, quantity}];
            }

        case CART_ACTION_TYPES.REMOVE_FROM_CART:

            const { id, all } = action.payload;

            if (all) {

                return state.filter(item => item.id !== id);

            }

            const productToRemove = state.find(item => item.id === id);

            if (productToRemove) {

                productToRemove.quantity--;
                localStorage.removeItem(id);

                if (productToRemove.quantity === 0) {

                    return state.filter(item => item.id !== id);

                }

            }

            return [...state];

        case CART_ACTION_TYPES.CLEAR_CART:

            return [];

        default:

            return state;

    }

};
