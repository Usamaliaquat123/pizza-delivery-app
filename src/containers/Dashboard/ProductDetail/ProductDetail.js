import React, {Component} from 'react';
import {View, Text, ScrollView, Image,} from 'react-native';
import {styles} from './ProductDetail.styles';
import {Header,Icon,Badge} from 'react-native-elements';
import {STATUS_BAR_HEIGHT, SCREEN_WIDTH} from './../../../utils/constants';
import {Colors, Img} from './../../../theme';
import LinearGradient from 'react-native-linear-gradient';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.navigation.getParam('product'),
      productItem: []
    };
  }

  componentDidMount() {
    console.log(this.state.product.items)
    const spc = this.state.product.items.trim(' ')
    const ArrItem  = spc.split(',')
    // const ArrItem = this.state.product.items
    console.log(ArrItem);
    
    this.setState({ productItem : ArrItem})

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
            icon: 'left',
            // name: 'antdesign',
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
                    Rs {this.state.product.price}
                  </Text>
                </View>
              </LinearGradient>
              </View>

              <View style={{  flexDirection: 'row',justifyContent: 'center',}}>
              
                {this.state.productItem.map(tags => (
                <Badge value={<Text style={{ color: '#E5E5E5', fontWeight: 'bold' }}>{tags}</Text>} badgeStyle ={{ padding: 15, backgroundColor: '#FE4A00', fontWeight: 'bold' }}/> 
               ))}
               {/* button of order now */}
              </View>
               {/* button of order now */}
         <View style={{ alignSelf: "center", backgroundColor: 'transparent', marginBottom: 20 }}>
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
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Order Now </Text>
                  <Icon
                      name="shopping-cart"
                      type="font-awesome"
                      color="#fff"
                    />
              </LinearGradient>
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
