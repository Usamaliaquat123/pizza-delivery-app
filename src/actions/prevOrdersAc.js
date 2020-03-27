import Api from './../Services/Api';
import { SET_ORDER_SUBMIT,SET_REJECTED_ORDERS,SET_PROCESSING_ORDERS,SET_COMPLETED_ORDERS } from "./types";
import AsyncStorage from '@react-native-community/async-storage';



export function setAllSubmitOrders() {
    return dispatch => {
        Api.PreviousOrders().then(order => {
            AsyncStorage.getItem('userId').then(id => {
            const ord = order.data.filter(prd => prd.user_id == id)
            dispatch({
                type: SET_ORDER_SUBMIT,
                payload: ord.data.filter(prd => prd.status == "order_submitted")
            })
            })
        })
    }
}
export function setAllProcessOrder() {
    return dispatch => {
        Api.PreviousOrders().then(order => {
           AsyncStorage.getItem('userId').then(id => {
            const ord = order.data.filter(prd => prd.user_id == id)

            dispatch({
                type: SET_PROCESSING_ORDERS,
                payload: ord.data.filter(prd => prd.status == "order_processing")
            })
           })
        })
    }
}
export function setAllRejectOrders() {
    return dispatch => {
        Api.PreviousOrders().then(order => {
            AsyncStorage.getItem('userId').then(id => {
            const ord = order.data.filter(prd => prd.user_id == id)

            dispatch({
                type: SET_REJECTED_ORDERS,
                payload: ord.data.filter(prd => prd.status == "order_rejected")
            })
            })
        })
    }
}
export function setAllCompletedOrders() {
    return dispatch => {
        Api.PreviousOrders().then(order => {
            AsyncStorage.getItem('userId').then(id => {
            const ord = order.data.filter(prd => prd.user_id == id)

            dispatch({
                type: SET_COMPLETED_ORDERS,
                payload: ord.data.filter(prd => prd.status == "order_completed")
            })
            })
        })
    }
}