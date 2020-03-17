import Api from './../Services/Api';
import { ADD_FEATURED_PRODUCTS, ADD_NORMAL_PRODUCTS, SET_ERROR, SET_CART_ITEM } from './types';



export function setAllFeaturedProducts() {
    return dispatch => {
      
        Api.products().then(products => {
        // products.data.filter(data => data.featured == 1)
        for (let i = 0; i < products.data.filter(data => data.featured == 1).length; i++) {
          products.data.filter(data => data.featured == 1)[i]['cart'] = false
          products.data.filter(data => data.featured == 1)[i]['orignalPrice'] =  products.data.filter(data => data.featured == 1)[i]['price']
          products.data.filter(data => data.featured == 1)[i]['quantity'] =  1
        }

        dispatch({
            type: ADD_FEATURED_PRODUCTS,
            payload: products.data.filter(data => data.featured == 1)
        })
        }).catch(err => dispatch({
            type: SET_ERROR,
            error: err
        }))
    };
}
export function setAllNormalProducts(){
    return dispatch => {
        Api.products().then(products => {
        //  products.data.filter(data => data.featured == 0)
        for (let i = 0; i < products.data.filter(data => data.featured == 0).length; i++) {
          products.data.filter(data => data.featured == 0)[i]['cart'] = false
          products.data.filter(data => data.featured == 0)[i]['orignalPrice'] =  products.data.filter(data => data.featured == 0)[i]['price']
          products.data.filter(data => data.featured == 0)[i]['quantity'] =  1
        }
        dispatch({
            type: ADD_NORMAL_PRODUCTS,
            payload: products.data.filter(data => data.featured == 0)
        })
        })
        // .catch(err => dispatch({
        //     type: SET_ERROR,
        //     error: err
        // }))
    }
}
export const setCartItem = data => ({
    type : SET_CART_ITEM,
    data,
});
