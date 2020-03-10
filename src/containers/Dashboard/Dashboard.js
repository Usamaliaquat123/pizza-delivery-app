import React, { Component } from 'react';
import { Header } from "react-native-elements";
import { View, Text,ScrollView } from 'react-native';
import {styles} from './Dashboard.styles'
import Colors from './../../theme/Colors';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
      <Header
  backgroundColor="#fff"
  placement="center"
  leftComponent={{ icon: 'menu', color: Colors.theme_color.orange }}
  // centerComponent={{ text: 'MY TITLE', style: { color: Colors.theme_color.orange, fontWeight: "bold" } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
      <ScrollView>
      
        <Text>asda</Text>
      </ScrollView>
      </View>
    );
  }
}

export default Dashboard;
