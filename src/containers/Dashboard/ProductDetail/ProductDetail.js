import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from './ProductDetail.styles';
import {Header,Badge} from 'react-native-elements';
import {STATUS_BAR_HEIGHT, SCREEN_WIDTH} from './../../../utils/constants';
import {Colors, Img} from './../../../theme';
import LinearGradient from 'react-native-linear-gradient';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.navigation.getParam('product'),
    };
  }

  render() {
    return (
      <>
        <Header
          containerStyle={{
            marginTop: Platform.OS === 'ios' ? 0 : -STATUS_BAR_HEIGHT,
          }}
          backgroundColor="#E5E5E5"
          placement="center"
          leftComponent={{
            icon: 'arrowleft',
            name: 'antdesign',
            color: '#372611',
          }}
          rightComponent={{icon: 'shopping-cart', color: '#372611'}}
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
          </View>
          {/* content */}
          <View style={{alignItems: 'center', marginTop: 5}}>
            <LinearGradient
              colors={['#FE4A00', '#F84D00', '#FC8C00']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={{
                height: 15,
                alignItems: 'flex-end',
                justifyContent: 'center',
                width: 50,
                borderRadius: 5,
              }}
            />
            <View style={{marginTop: 15, alignItems: 'center'}}>
              {/* Heading */}
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: 'bold',
                  color: '#372611',
                  textAlign: 'center',
                }}>
                {this.state.product.title}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#372611',
                  textAlign: 'center',
                  opacity: 0.5,
                }}>
                {this.state.product.overview}
              </Text>
              <View style={{ marginTop: 30 }}>
              
              <LinearGradient
                colors={['#FE4A00', '#F84D00', '#FC8C00']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  // borderBottomWidth: 3,
                  // borderColor: ,
                  height: 50,
                  marginBottom: 20,
                  width: 150,
                }}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    padding: 10,
                    height: 45,
                    width: 145,
                  }}>
                  <Text
                    style={{
                      color: '#FE4A00',
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    ${this.state.product.price}
                  </Text>
                </View>
              </LinearGradient>
              </View>

              <View style={{  flexDirection: 'row',justifyContent: 'center',}}>
              
                {this.state.product.items.map(tags => (

              <Badge value={<Text style={{ margin: 20, fontSize: 15, color: '#fff' }}>My Custom Badge</Text>} style={{ padding: 20 }} status="error" />
                ))}
              
              </View>
          {/* Badges */}
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default ProductDetail;
