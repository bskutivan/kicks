import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
} from '../utils/actions';

import reducer from '../utils/reducers';

const initialState = {
    products: [],
    categories: [{name: 'Performance'}],
    currentCategory: '1',
    cart: [
        {
            _id: '1',
            name: 'Nike',
            purchaseQuantity: 1
        },
        {
            _id: '2',
            name: 'Addidas',
            purchaseQuantity: 2
        }
    ],
    cartOpen: false
};

test ('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}]
    });

    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0)
});

test ('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });

    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
});

test ('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    });

    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
});