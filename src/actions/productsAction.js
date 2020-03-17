import Api from './../Services/Api';
import { ADD_FEATURED_PRODUCTS, ADD_NORMAL_PRODUCTS, SET_ERROR } from './types';



export function setAllFeaturedProducts() {
    return dispatch => {
        Api.products().then(products => 
            dispatch({
                type: ADD_FEATURED_PRODUCTS,
                payload: products.data
            }),)
        // return Api.products().then(products => {
        // products.data.filter(data => data.featured == 1)
        // for (let i = 0; i < arr.length; i++) {
        //   arr[i]['cart'] = false
        // }
        // dispatch({
        //     type: ADD_FEATURED_PRODUCTS,
        //     payload: products.data.filter(data => data.featured == 1)
        // })
        // }).catch(err => dispatch({
        //     type: SET_ERROR,
        //     error: err
        // }))
    };
}
export function setAllNormalProducts(){
    return dispatch => {
        Api.producs().then(products => 
                // products.data.filter(data => data.featured == 0)
        // for (let i = 0; i < arrs.length; i++) {
        //   arrs[i]['cart'] = false
        // }
            dispatch({
            type: ADD_NORMAL_PRODUCTS,
            payload: products.data.filter(data => data.featured == 0)
        })
        )
        // .catch(err => dispatch({
        //     type: SET_ERROR,
        //     error: err
        // }))
    }
}