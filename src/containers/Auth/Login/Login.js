import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './Login.styles';
import {Img, jsons} from './../../../theme';
import LinearGradient from 'react-native-linear-gradient'
import { Input,Icon,Button  } from "react-native-elements";
import LottieView from 'lottie-react-native';
// import { logo } from './../../../theme/Images';
class Login extends Component {
  constructor(props) {
    console.log(Img);
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <View>
              <LottieView
                autoPlay
                source={jsons.pizza_logo}
                style={styles.logo}
              />
            </View>
             <Input
             autoCompleteType={'tel'}
                inputContainerStyle={styles.viewInput}
                placeholder="email@address.com"
                placeholderTextColor={'#C7C7C7'}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={'232'}
                keyboardType="numeric"
                inputStyle={styles.textInput}
                onChangeText={text => this.setState({username: text})}
                leftIcon={
                  <Icon
                    name={'email'}
                    underlayColor={'transparent'}
                    color={'#C7C7C7'}
                  />
                }
              />
               <Input
                inputContainerStyle={styles.viewInput}
                placeholder="******"
                placeholderTextColor={'#C7C7C7'}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={''}
                keyboardType="text"
                inputStyle={styles.textInput}
                onChangeText={text => this.setState({username: text})}
                leftIcon={
                  <Icon
                    name={'email'}
                    underlayColor={'transparent'}
                    color={'#C7C7C7'}
                  />
                }
              />
              <View style={{ alignSelf: 'center' }}>
              
             <LinearGradient
                colors={['#FC3838', '#F52B43', '#ED0D51']}
                start={{ x: 0.7, y: 1.2 }} end={{ x: 0.0, y: 0.7 }}
                style={{ height: 48, width: 270, alignItems: 'center',
                 justifyContent: 'center', width: 270, borderRadius: 18 }}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>LOGIN</Text>
              </LinearGradient>
              </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    );
  }
}

export default Login;
