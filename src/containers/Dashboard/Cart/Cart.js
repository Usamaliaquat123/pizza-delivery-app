import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView,Image } from 'react-native';
import { Header,Icon } from "react-native-elements";
import { styles } from "./Cart.styles";
import {Colors,Img} from './../../../theme';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from './../../../utils/constants';
import AsyncStorage from '@react-native-community/async-storage';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

componentDidMount() {
  AsyncStorage.getItem('cart').then(res => {
    console.log(res);
    
  }).catch(err => {
    console.log(err);
    
  })
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
              width: SCREEN_WIDTH - 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={Img.hd_dish} />
            {/* {this.state.product.offer != "" && ( */}

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', borderRadius: 10 }}>
                <Icon name="tags" type="antdesign" color="#382715" size={35} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color:"#FE4A00", marginTop:5,  }}>20% off</Text>
              </View>
            {/* )} */}
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Cart;
