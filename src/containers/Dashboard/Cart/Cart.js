import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from "./Cart.styles";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Cart </Text>
      </View>
    );
  }
}

export default Cart;
