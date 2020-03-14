import Api from './../Services/Api';
import { ADD_FEATURED_PRODUCTS, ADD_NORMAL_PRODUCTS, SET_ERROR } from './types';



export function setAllFeaturedProducts() {
    return dispatch => {
        Api.products().then(products => dispatch({
            type: ADD_FEATURED_PRODUCTS,
            payload: products.data.filter(data => data.featured == 1)
        })).catch(err => dispatch({
            type: SET_ERROR,
            error: err
        }))
    }
}

export function setAllNormalProducts(){
    return dispatch => {
        Api.producs().then(products => dispatch({
            type: ADD_NORMAL_PRODUCTS,
            payload: products.data.filter(data => data.featured == 0)
        })).catch(err => dispatch({
            type: SET_ERROR,
            error: err
        }))
    }
}