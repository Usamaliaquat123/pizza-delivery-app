import Api from './../Services/Api';
import { SET_ORDER_SUBMIT,SET_REJECTED_ORDERS,SET_PROCESSING_ORDERS,SET_COMPLETED_ORDERS } from "./types";



export function setAllSubmitOrders() {
    return dispatch => {
        Api.PreviousOrders().then(order => {
            dispatch({
                type: SET_ORDER_SUBMIT,
                payload: order.data.filter(prd => prd.status == "order_submitted")
            })
        })
    }
}
export function setAllProcessOrder() {
    return dispatch => {
        Api.PreviousOrders().then(order => {
            dispatch({
                type: SET_PROCESSING_ORDERS,
                payload: order.data.filter(prd => prd.status == "order_processing")
            })
        })
    }
}
export function setAllRejectOrders() {
    return dispatch => {
        Api.PreviousOrders().then(order => {
            dispatch({
                type: SET_REJECTED_ORDERS,
                payload: order.data.filter(prd => prd.status == "order_rejected")
            })
        })
    }
}
export function setAllCompletedOrders() {
    return dispatch => {
        Api.PreviousOrders().then(order => {
            dispatch({
                type: SET_COMPLETED_ORDERS,
                payload: order.data.filter(prd => prd.status == "order_completed")
            })
        })
    }
}