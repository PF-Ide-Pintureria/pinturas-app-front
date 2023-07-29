export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
};

export const updateLocalStorage = state => {
    console.log('localStorage', localStorage);
    localStorage.setItem('cart', JSON.stringify(state));
};

export const cartReducer = (state = cartInitialState, action) => {

    switch (action.type) {

        case CART_ACTION_TYPES.ADD_TO_CART:

            console.log('Action add to cart');

            const { product, quantity } = action.payload;

            console.log('product', product);
            console.log('quantity', quantity);

            console.log('state', state);

            const productInCart = state.find(item => item.id === product.id);

            console.log('productInCart', productInCart);

            if (productInCart) {

                productInCart.quantity += quantity;

                updateLocalStorage(state);

                return [...state];

            } else {
                updateLocalStorage([...state, { ...product, quantity }]);
                return [...state, { ...product, quantity }];
            }

        case CART_ACTION_TYPES.REMOVE_FROM_CART:

            const { id, all } = action.payload;

            if (all) {

                return state.filter(item => item.id !== id);

            }

            const productToRemove = state.find(item => item.id === id);

            if (productToRemove) {

                productToRemove.quantity--;

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
