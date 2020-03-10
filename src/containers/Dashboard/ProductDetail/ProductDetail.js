import React, { Component } from 'react';
import { View, Text, ScrollView,Image } from 'react-native';
import { styles } from "./ProductDetail.styles";
import { Header } from "react-native-elements";
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from './../../../utils/constants';
import {Colors,Img} from './../../../theme';
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product : this.props.navigation.getParam('product')
    };
  }




  render() {
    return (
        <>
         <Header
          containerStyle={{  marginTop: Platform.OS === 'ios' ? 0 : -STATUS_BAR_HEIGHT,}}
          backgroundColor="#E5E5E5"
          placement="center"
          leftComponent={{icon: 'arrowleft',name: 'antdesign', color: '#372611'}}
          rightComponent={{icon: 'shopping-cart', color: '#372611'}}
        />
        <ScrollView>
            <View style={{ backgroundColor: '#E5E5E5', borderBottomLeftRadius: 40, borderBottomRightRadius: 40,height: 300, width: SCREEN_WIDTH - 2 , alignSelf: 'center', }}>
              <Image source={Img.dish} resizeMode='repeat' />
            </View>
        </ScrollView>
        </>
    );
  }
}

export default ProductDetail;
