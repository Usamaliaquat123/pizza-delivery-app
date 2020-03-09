import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from "./Login.styles";
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
          <Text>asdsa</Text>
        </KeyboardAwareScrollView>
      </ScrollView>
    );
  }
}

export default Login;
