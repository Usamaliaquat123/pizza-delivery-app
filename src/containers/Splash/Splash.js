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
  
  AsyncStorage.getItem('phone').then(res => {
    console.log(res);
    
    if(phone == undefined){
      // not loggedin

    }else{
      //  loggedin 

    }
  }) 
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
