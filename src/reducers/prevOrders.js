import { SET_COMPLETED_ORDERS, SET_ORDER_SUBMIT, SET_REJECTED_ORDERS,SET_PROCESSING_ORDERS } from './../actions/types';
const INITIAL_STATE = {
      prevOrderSubmit: [],
      prevOrderCompleted: [],
      prevOrderRejected: [],
      prevProcessingOrders: [],
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ORDER_SUBMIT:
          return {
              ...state,
              prevOrderSubmit : action.payload
            };
        case SET_COMPLETED_ORDERS:
          return {
              ...state,
              prevOrderCompleted : action.payload
            };
        case SET_REJECTED_ORDERS:
          return {
              ...state,
              prevOrderRejected : action.payload
            };
        case SET_PROCESSING_ORDERS:
          return {
              ...state,
              prevProcessingOrders : action.payload
            };
    
        default:
            return state;
    }
}