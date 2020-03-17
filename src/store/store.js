import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
// import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

const Store = createStore(
    reducers,
    {},
    compose(applyMiddleware(thunk)),
    //  compose(applyMiddleware(thuck), offline(offlineConfig)),     
)



export default Store