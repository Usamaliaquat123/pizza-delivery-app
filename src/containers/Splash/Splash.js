import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import { styles } from "./Splash.styles";
import  AsyncStorage  from '@react-native-community/async-storage';
import {Img} from './../../theme';
import {NavigationActions} from 'react-navigation';
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
componentDidMount() {
  AsyncStorage.getItem('phone').then(res => { 
    if(res == undefined){
       this.props.navigation.reset(
            [NavigationActions.navigate({routeName: 'Login'})],
            0,
          );
    }else{
          this.props.navigation.reset(
            [NavigationActions.navigate({routeName: 'HomeNav'})],
            0,
          );
    }
  })
}

  render() {
    return (
      <View style={{ justifyContent: "center", marginTop: 50 }}>
         <Image source={Img.logo} style={{ width: 350, height: 300 ,marginLeft: 5  }}/>
      </View>
    );
  }
}

export default Splash;
