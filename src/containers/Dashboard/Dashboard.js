import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {styles} from './Dashboard.styles'
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Dashboard </Text>
      </View>
    );
  }
}

export default Dashboard;
