import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from "react-redux";
import { store } from 'store/store';
import Auths from './navigation/AppNavigation';

export class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <Auths/>                
            </Provider>
        )
    }
}

export default Main
