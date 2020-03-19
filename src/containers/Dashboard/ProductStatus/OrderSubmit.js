import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Icon } from 'react-native'
import { Header } from 'react-native-elements'

export class OrderSubmit extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
          <>
           <Header
          containerStyle={{
            marginTop: Platform.OS === 'ios' ? 0 : -STATUS_BAR_HEIGHT,
          }}
          backgroundColor="#E5E5E5"
          placement="center"
          leftComponent={
            <TouchableOpacity onPress={() => 
            {
              // this.props.navigation.state.params.updateDate('sd')
              this.props.navigation.state.params.onGoBack()              
              this.props.navigation.goBack()}}>
              <Icon
                name="restaurant-menu"
                type="material"
                color={'#382715'}
              />
            </TouchableOpacity>
          }
          rightComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Cart')}>
              <Icon
                name="shopping-cart"
                type="entypo"
                color={'#382715'}
              />
            </TouchableOpacity>
          }
        />
          </>
        )
    }
}


