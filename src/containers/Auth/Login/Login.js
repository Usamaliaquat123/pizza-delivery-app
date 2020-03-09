import React, { Component } from 'react';
import { View, Text, ScrollView,Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import  styles  from "./Login.styles";
import { Img } from './../../../theme';
// import { logo } from './../../../theme/Images';
class Login extends Component {
  constructor(props) {
    console.log(Img)
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>
         <KeyboardAwareScrollView>
        <View style={styles.container}>
               <Image source={Img.LogoApp} style={styles.logo} />
        </View>
         </KeyboardAwareScrollView>
       </ScrollView>
    );
  }
}

export default Login;
