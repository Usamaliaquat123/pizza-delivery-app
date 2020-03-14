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
import Api from './../../../Services/Api';
class Login extends Component {
  constructor(props) {
    console.log(Img);
    super(props);
    this.state = {
      loading: false,
      users : [],
      phonenumber : '',
      password: '',
      errMsg : ''
    };
  }


componentDidMount() {
  Api.fetchUser().then(res => this.setState({ users: res.data }))
}
authenticate(){
  if(this.state.phonenumber == "" && this.state.password == ""){
    this.setState({errMsg : "Please check your credientials" })
    this.refs.errModal.open()
    
  }else{
    this.state.users.map(res => {
      if(res.phone  == this.state.phonenumber && res.password == this.state.password){
          this.props.navigation.navigate('HomeNav')
      }
    })
  }
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
                value={this.state.phonenumber}
                keyboardType="numeric"
                inputStyle={styles.textInput}
                onChangeText={text => this.setState({phonenumber: text})}
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
              style={styles.outline}>
              <Input
                inputContainerStyle={styles.viewInput}
                placeholder="******"
                placeholderTextColor={'#F94D03'}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={this.state.password}
                keyboardType="text"
                inputStyle={styles.textInput}
                onChangeText={text => this.setState({password: text})}
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
            <TouchableOpacity onPress={() => this.authenticate()}>
            
            
              <LinearGradient
                colors={['#FE5D03', '#F94D03', '#F94D03']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
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


         
           <Modal style={{    
    alignItems: 'center',
       marginTop : 30,
    height: 200,
    width: 300,
    borderRadius: 30,
    backgroundColor : '#fff' }} position={"center"} ref={"errModal"} backdrop={true} isDisabled={this.state.isDisabled} coverScreen={true} backdropPressToClose={true}>
           
           <View style={{ margin: 20 }}>
           
            <Icon
                name="user"
                type="antdesign"
                size={50}
                color={'#312717'}
              />
              <Text style={{marginTop: 15, textAlign: "center", fontSize: 15, fontWeight: 'bold', color: "#FD5D00" }}>{this.state.errMsg}</Text>
              <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                <TouchableOpacity style={{ borderRadius: 15 , backgroundColor: "#FD5D00", justifyContent: 'center', padding: 12, marginRight: 10 }} onPress={() => this.refs.errModal.close()}>
                  <Text style={{ color:"#fff", fontSize: 13 }}>Check credientials</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={{ borderRadius: 15 , backgroundColor: "#FD5D00", justifyContent: 'center', padding: 12, marginLeft: 10 }} onPress={() => {this.paymentProceed(this.state.total)
                this.refs.modal3.close()
                }}>
                  <Text style={{ color:"#fff", fontSize: 13 }}>Place Now..!</Text>
                </TouchableOpacity> */}
              </View>
           </View>
           
          </Modal>
      </ScrollView>
    );
  }
}

export default Login;
