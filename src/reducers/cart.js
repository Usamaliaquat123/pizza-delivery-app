
import { SET_CART_ITEM } from './../actions/types';
const INITIAL_STATE = {
  cartItem: ['asdsa'],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CART_ITEM:
          return {
              ...state,
              cartItem : action.payload
            };
    
        default:
            return state;
    }
}