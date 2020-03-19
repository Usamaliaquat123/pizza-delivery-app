import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";
import prevOrders from "./prevOrders";


export default combineReducers({
    products,
    cart,
    prevOrders
})