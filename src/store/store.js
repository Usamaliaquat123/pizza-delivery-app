import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import {offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

const store = createStore(
    reducers,
    {},
     compose(applyMiddleware(thuck), offline(offlineConfig)),     
)



export default store