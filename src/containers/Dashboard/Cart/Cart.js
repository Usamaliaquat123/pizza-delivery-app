import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {styles} from './Cart.styles';
import {Colors, Img} from './../../../theme';
import {STATUS_BAR_HEIGHT, SCREEN_WIDTH} from './../../../utils/constants';
import AsyncStorage from '@react-native-community/async-storage';
import  LinearGradient  from 'react-native-linear-gradient';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('cart')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem('@storage_Key', 'stored value')
  //   } catch (e) {
  //     // saving error
  //   }
  // }
  render() {
    return (
      <>
        <Header
          containerStyle={{
            marginTop: Platform.OS === 'ios' ? 0 : -STATUS_BAR_HEIGHT,
          }}
          backgroundColor="#E5E5E5"
          placement="center"
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Icon
                name="restaurant-menu"
                type="material"
                color={Colors.theme_color.orange}
              />
            </TouchableOpacity>
          }
          rightComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Cart')}>
              <Icon
                name="shopping-cart"
                type="entypo"
                color={Colors.theme_color.orange}
              />
            </TouchableOpacity>
          }
        />
        <ScrollView>
          <View
            style={{
              backgroundColor: '#E5E5E5',
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              height: 300,
              width: SCREEN_WIDTH - 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{ alignSelf: 'flex-end', marginRight: 10}}>
            <Icon name="cross" type="entypo" size={30} color="#382715" />
            </View>
            <View style={{ alignItems: 'center',}}>
            <Image source={Img.hd_dish} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Icon name="tags" type="antdesign" color="#382715" size={35} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#FE4A00',
                  marginTop: 5,
                }}>
                20% off
              </Text>
            </View>
            {/* )} */}
          </View>


          <View
            style={{
              backgroundColor: '#E5E5E5',
              height: 300,
              marginTop: 15,
      borderRadius: 40,
              width: SCREEN_WIDTH - 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 10}}>
            <Icon name="cross" type="entypo" size={30} color="#382715" />
            </View>
            <View style={{ alignItems: 'center',}}>
            <Image source={Img.hd_dish} />
            </View>
            {/* {this.state.product.offer != "" && ( */}

            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Icon name="tags" type="antdesign" color="#382715" size={35} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#FE4A00',
                  marginTop: 5,
                }}>
                20% off
              </Text>
            </View>
            {/* )} */}
          </View>

          <View
            style={{
              backgroundColor: '#E5E5E5',
              height: 300,
              marginTop: 15,
      borderRadius: 40,
              width: SCREEN_WIDTH - 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 10}}>
            <Icon name="cross" type="entypo" size={30} color="#382715" />
            </View>
            <View style={{ alignItems: 'center',}}>
            <Image source={Img.hd_dish} />
            </View>
            {/* {this.state.product.offer != "" && ( */}

            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Icon name="tags" type="antdesign" color="#382715" size={35} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#FE4A00',
                  marginTop: 5,
                }}>
                20% off
              </Text>
            </View>
            {/* )} */}
          </View>
<View
                style={{
                  alignSelf: 'center',
                  backgroundColor: 'transparent',
                  marginBottom: 20,
                }}>
                <LinearGradient
                  colors={['#FE4A00', '#FE4A00', '#FD6F00']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{
                    marginTop: 10,
                    height: 48,
                    width: 270,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 270,
                    borderRadius: 10,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                    Place your order now{'  '}
                  </Text>
                  <Icon name="shopping-cart" type="font-awesome" color="#fff" />
                </LinearGradient>
              </View>




        </ScrollView>
      </>
    );
  }
}

export default Cart;
