import React, {Component} from 'react';
import {View, Text, ScrollView, Image,TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './Login.styles';
import {Img, jsons} from './../../../theme';
import LinearGradient from 'react-native-linear-gradient';
import {Input, Icon, Button} from 'react-native-elements';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modalbox'
import { Bars  } from 'react-native-loader'
class Login extends Component {
  constructor(props) {
    console.log(Img);
    super(props);
    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <ScrollView>
      {this.state.loading == false && (
<KeyboardAwareScrollView>
          <View style={styles.container}>
            <View>
              <LottieView
                autoPlay
                source={jsons.pizza_logo}
                style={styles.logo}
              />
            </View>

            <LinearGradient
              colors={['#FE5D03', '#F94D03', '#F94D03']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              // start={{ x: 0.7, y: 1.2 }} end={{ x: 0.0, y: 0.7 }}
              style={styles.outline}>
              <Input
                inputContainerStyle={styles.viewInput}
                placeholder="+92300055125"
                placeholderTextColor={'#F94D03'}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={''}
                keyboardType="numeric"
                inputStyle={styles.textInput}
                onChangeText={text => this.setState({username: text})}
                leftIcon={
                  <Icon
                    name={'phone'}
                    underlayColor={'transparent'}
                    color={'#FE5D03'}
                    type={'entypo'}
                  />
                }
              />
            </LinearGradient>

            <LinearGradient
              colors={['#FE5D03', '#F94D03', '#F94D03']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              // start={{ x: 0.7, y: 1.2 }} end={{ x: 0.0, y: 0.7 }}
              style={styles.outline}>
              <Input
                inputContainerStyle={styles.viewInput}
                placeholder="******"
                placeholderTextColor={'#F94D03'}
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
                    color={'#FE5D03'}
                  />
                }
              />
            </LinearGradient>
            <View style={{alignSelf: 'center'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeNav')}>
            
            
              <LinearGradient
                colors={['#FE5D03', '#F94D03', '#F94D03']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                // start={{ x: 0.7, y: 1.2 }} end={{ x: 0.0, y: 0.7 }}
                style={{
                  height: 48,
                  width: 270,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 270,
                  borderRadius: 18,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
              </LinearGradient>
            </TouchableOpacity>
              <Text style={{textAlign: 'center', fontSize: 14, marginTop: 10}}>
                If you don't have an account{' '}
                <Text
                  style={{color: '#F94D03', fontWeight: 'bold'}}
                  onPress={() => this.props.navigation.navigate('Register')}>
                  Sign up
                </Text>
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      )}
      {this.state.loading == true && (


    <View style={{flex: 1, justifyContent: 'center'}}>
      <LottieView
        autoPlay
        source={jsons.loading}
        // overlayColor="white"
        style={{alignSelf: 'center', width: 100, height: 100}}
      />
    </View>
      )}
      </ScrollView>
    );
  }
}

export default Login;
