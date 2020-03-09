import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from "./Offline.styles";
class Offline extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Offline </Text>
      </View>
    );
  }
}

export default Offline;
