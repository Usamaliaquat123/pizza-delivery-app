import { ADD_FEATURED_PRODUCTS,ADD_NORMAL_PRODUCTS } from './../actions/types';
const INITIAL_STATE = {
    featuredProducts: [],
    normalProd: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_FEATURED_PRODUCTS:
          return {
              ...state,
              featuredProducts : action.payload
            };
        case ADD_NORMAL_PRODUCTS: 
            return {
                ...state,
                normalProd: action.payload
            }
    
        default:
            return state;
    }
}


