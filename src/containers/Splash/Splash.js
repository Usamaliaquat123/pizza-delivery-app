import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from "./Splash.styles";
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Splash </Text>
      </View>
    );
  }
}

export default Splash;
