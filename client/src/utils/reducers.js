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
} from "./actions";

const defaultState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
}

const reducer = (state=defaultState, action) => {
    switch (action.type) {
        // if action type value is the value of UPDATE_PRODUCTS, return a new state obj with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories],
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            }
            
        default:
            return state;    
    }
};

export default reducer;
