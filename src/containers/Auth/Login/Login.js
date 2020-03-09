import React, { Component } from 'react';
import { View, Text, ScrollView,Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import  styles  from "./Login.styles";
import { logo } from './../../../theme/images';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>
        <KeyboardAwareScrollView>
               <Image source={logo} style={styles.logo} />
        </KeyboardAwareScrollView>
      </ScrollView>
    );
  }
}

export default Login;
