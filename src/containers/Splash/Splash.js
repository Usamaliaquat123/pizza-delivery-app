import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from "./Splash.styles";
import  AsyncStorage  from '@react-native-community/async-storage';
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
componentDidMount() {
  
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
