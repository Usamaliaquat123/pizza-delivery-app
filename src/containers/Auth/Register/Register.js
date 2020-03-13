import styles from './Register.styles';

import React, {Component} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Img, jsons} from './../../../theme';
import LinearGradient from 'react-native-linear-gradient';
import {Input, Icon, Button} from 'react-native-elements';
import LottieView from 'lottie-react-native';
import Api from './../../../Services/Api';
import Modal from "react-native-modalbox";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: '',
      username: '',
      address: '',
      email : '',
      contact: ''
    };
  }

  componentDidMount() {
    
  }
  
registerNow(){
  const param = {
    username: this.state.username,
    address: this.state.address,
    phone: this.state.contact,
    password: this.state.pass
  }
  console.log(param)
  if(this.state.username == "" && this.state.address == "" && this.state.phone == "" && this.state.password == ""){
      this.refs.errModal.open()
      this.setState({ errMsg : "Type you valid credientials" })
  }else{
  Api.createUser(param).then(res => console.log(res)).catch(err => console.log(err))

  }
}
  render() {
    return (
      <ScrollView>
        <KeyboardAwareScrollView>
          {/* <View style={styles.container}> */}
          <View>
            <LottieView
              autoPlay
              source={jsons.pizza_logo}
              style={styles.logo}
            />
            {/* </View> */}

            <Text
              style={{
                fontSize: 30,
                color: '#F94D03',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: -20,
                marginBottom: 10,
              }}>
              Register{' '}
            </Text>
            <LinearGradient
              colors={['#FE5D03', '#F94D03', '#F94D03']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.outline}>
              <Input
                inputContainerStyle={styles.viewInput}
                placeholder="username"
                placeholderTextColor={'#30270E'}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={this.state.username}
                keyboardType="text"
                inputStyle={styles.textInput}
                onChangeText={text => this.setState({username: text})}
                leftIcon={
                  <Icon
                    name={'user'}
                    underlayColor={'transparent'}
                    color={'#FE5D03'}
                    type={'antdesign'}
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
                placeholder="+92300055125"
                placeholderTextColor={'#30270E'}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={this.state.contact}
                keyboardType="numeric"
                inputStyle={styles.textInput}
                onChangeText={text => this.setState({contact: text})}
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
                placeholder="address"
                placeholderTextColor={'#30270E'}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={this.state.address}
                keyboardType="numeric"
                inputStyle={styles.textInput}
                onChangeText={text => this.setState({address: text})}
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
                type={'password'}
                inputContainerStyle={styles.viewInput}
                placeholder="******"
                placeholderTextColor={'#30270E'}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={this.state.pass}
                keyboardType="text"
                inputStyle={styles.textInput}
                onChangeText={text => this.setState({pass: text})}
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
            <TouchableOpacity onPress={() => this.registerNow()}>
            
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
                <Text style={{color: 'white', fontWeight: 'bold'}}>Register</Text>
              </LinearGradient>
            </TouchableOpacity>
              <Text style={{textAlign: 'center', fontSize: 14, marginTop: 10}}>
                If you already have an account{' '}
                <Text
                  style={{color: '#F94D03', fontWeight: 'bold'}}
                  onPress={() => this.props.navigation.pop()}>
                  Log in
                </Text>
              </Text>
            </View>
          </View>
           <Modal style={{    
    alignItems: 'center',
       marginTop : 30,
    height: 200,
    width: 300,
    borderRadius: 30,
    backgroundColor : '#fff' }} position={"center"} ref={"errModal"} backdrop={true} isDisabled={this.state.isDisabled} coverScreen={true} backdropPressToClose={true}>
           
           <View style={{ margin: 20 }}>
           
            <Icon
                name="disconnect"
                type="antdesign"
                size={50}
                color={'#312717'}
              />
              <Text style={{marginTop: 15, textAlign: "center", fontSize: 15, fontWeight: 'bold', color: "#FD5D00" }}>{this.state.errMsg}</Text>
              <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                <TouchableOpacity style={{ borderRadius: 15 , backgroundColor: "#FD5D00", justifyContent: 'center', padding: 12, marginRight: 10 }} onPress={() => this.refs.errModal.close()}>
                  <Text style={{ color:"#fff", fontSize: 13 }}>Retry internety connection...</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={{ borderRadius: 15 , backgroundColor: "#FD5D00", justifyContent: 'center', padding: 12, marginLeft: 10 }} onPress={() => {this.paymentProceed(this.state.total)
                this.refs.modal3.close()
                }}>
                  <Text style={{ color:"#fff", fontSize: 13 }}>Place Now..!</Text>
                </TouchableOpacity> */}
              </View>
           </View>
           
          </Modal>

        </KeyboardAwareScrollView>
      </ScrollView>
    );
  }
}

export default Register;
