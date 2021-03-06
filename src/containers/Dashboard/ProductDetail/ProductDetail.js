import React, {Component} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {styles} from './ProductDetail.styles';
import {Header, Icon, Badge, ButtonGroup} from 'react-native-elements';
import {STATUS_BAR_HEIGHT, SCREEN_WIDTH} from './../../../utils/constants';
import {Colors, Img} from './../../../theme';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modalbox';
import jsons from './../../../theme/Json';
import {AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
import { setCartItem } from './../../../actions/productsAction';
const  base = 'http://pizza.softcob.com/img/menu_pic/'; 
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.navigation.getParam('product'),
      productItem: [],
      
      cart : [],
      selectedIndex: 2,
      orignalPrice: 0,
    };
    this.pizzaSizes = this.pizzaSizes.bind(this);
  }


updateParent(){
  // this.props.setCartItem()
  this.props.navigation.state.params.onGoBack();
  this.render()
  this.setState({  })
}
  componentDidMount() {
    const spc = this.state.product.items.trim(' ');
    const ArrItem = spc.split(',');
    this.setState({productItem: ArrItem});
    console.log(this.state.product);
  }
  decreamentItem(id) {
    if (this.state.product['quantity'] == 1) {
      return null;
    }
    this.setState({});
   this.state.product['quantity'] -= 1;
   this.state.product['price'] -= this.state.product['orignalPrice'];
  }
  increamentItem(id) {
    console.log(id);
    this.setState({});
    this.state.product['quantity'] += 1;
    var iniPrice = parseInt(this.state.product['price']);
    var orignalPrice = parseInt(this.state.product['orignalPrice']);
    iniPrice += orignalPrice;
    this.state.product['price'] = iniPrice;
  }
addCart(product) {

const prod = product


    if(this.props.getCartItem.length == 0){
//  this.props.getCartItem.push(product);
//    this.refs.addCartConfirm.close();
// this.props.navigation.navigate('Cart',{ onGoBack: () => this.updateParent(),}) 
//     }else{

//       if(prodct.id == product.id){
//         this.props.getCartItem[index]['quantity'] += product.quantity
//         this.props.getCartItem[index]['price'] += product.price
//            this.refs.addCartConfirm.close();
// this.props.navigation.navigate('Cart',{ onGoBack: () => this.updateParent(),}) 
     
           this.props.getCartItem.push(prod)
   this.refs.addCartConfirm.close();
  
this.props.navigation.navigate('Cart',{ onGoBack: () => this.updateParent(),}) 
     
      }else{
        this.props.getCartItem.filter((prodct, index) => {
  if(prod == prodct){
      this.refs.addCartConfirm.close();
    return this.refs.popupError.open()
  }
})

this.props.getCartItem.filter((product, index) => {
  if (prod != product) {
     this.props.getCartItem.push(prod)
      this.refs.addCartConfirm.close()
  }
})

      }
//   this.props.getCartItem.push(prod)
//    this.refs.addCartConfirm.close();
// this.props.navigation.navigate('Cart',{ onGoBack: () => this.updateParent(),}) 
    this.props.navigation.navigate('Cart',{ onGoBack: () => this.updateParent(),}) 
    

   
  }  

  pizzaSizes(selectedIndex) {
    this.setState({selectedIndex: selectedIndex});
    console.log(selectedIndex);
  }

  render() {
    const { getCartItem } = this.props
    console.log(getCartItem);

    const products = this.state.product
    const buttons = ['Hello', 'World', 'Buttons'];
    const {selectedIndex} = this.state;
    return (
      <>
      <Header
          containerStyle={{
            marginTop: Platform.OS === 'ios' ? 0 : -STATUS_BAR_HEIGHT,
          }}
          backgroundColor="#E5E5E5"
          placement="center"
          leftComponent={
            <TouchableOpacity onPress={() => {
              this.props.navigation.state.params.onGoBack();
              this.props.navigation.pop()}}>
              <Icon name="left" type="antdesign" color="#372611" />
            </TouchableOpacity>
          }
          rightComponent={
            <View>
             {this.props.getCartItem.length != 0 && (

            <Badge value={this.props.getCartItem.length} containerStyle={{ position: 'absolute', top: -10,fontSize: 5, left: 10  , zIndex: 2, }} badgeStyle={{ borderColor: 'transparent',fontSize: 5,backgroundColor: '#FE4A00' }} status="error" />
            )}
            <TouchableOpacity
              onPress={() => {
                
                this.props.navigation.navigate('Cart',{ onGoBack: () => this.updateParent(),})}}>
              <Icon name="shopping-cart" type="entypo" color="#372611" />
            </TouchableOpacity>
            </View>
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
              <Image
                       source={{uri:base+this.state.product.picture  }} style={{ width: 170, height: 170 ,marginLeft: 5  }}
                    />
            {/* <Image source={{ uri:base+this.state.product.picture }} width={100} height={100} /> */}
            {products.offer != '' && (
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
                  {products.offer}% off
                </Text>
              </View>
            )}
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
                {products.title}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#372611',
                  textAlign: 'center',
                  opacity: 0.5,
                }}>
                {products.overview}
              </Text>
              <View style={{marginTop: 30}}>
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
                      Rs {products.price}
                    </Text>
                  </View>
                </LinearGradient>
              </View>

              <View style={{ justifyContent: 'center'}}>
                {this.state.productItem.map(tags => (
                  <Badge
                  containerStyle={{ marginTop: 5}}
                    value={ 
                      <Text style={{color: '#E5E5E5', fontWeight: 'bold'}}>
                        {tags}
                      </Text>
                    }
                    badgeStyle={{
                      padding: 15,
                      backgroundColor: '#FE4A00',
                      fontWeight: 'bold',
                    }}
                  />

                ))}
                {/* button of order now */}
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  alignSelf: 'center',
                }}>
                <Icon
                  name="left"
                  type="antdesign"
                  color="#FE4A00"
                  size={30}
                  iconStyle={{marginTop: 1}}
                  onPress={() => this.decreamentItem(products.id)}
                />

                <Text
                  style={{
                    color: '#FE4A00',
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginLeft: 20,
                    marginRight: 20,
                  }}>
                  {products.quantity}
                </Text>
                <Icon
                  name="right"
                  type="antdesign"
                  color="#FE4A00"
                  size={30}
                  iconStyle={{marginTop: 1}}
                  onPress={() => this.increamentItem(products.id)}
                />
              </View>
              <View>
                {/* <ButtonGroup
                  onPress={this.pizzaSizes}
                  selectedIndex={selectedIndex}
                  buttons={['S', 'M', 'L', 'XL', 'XXL']}
                  // buttonStyle={{ borderColor: "transparent" }}
                  textStyle={{color: '#312717', opacity: 0.5}}
                  // innerBorderStyle={{ borderColor: "transparent" }}
                  selectedButtonStyle={{backgroundColor: '#FE4A00'}}
                  containerStyle={{
                    height: 40,
                    width: 200,
                    borderColor: '#FE4A00',
                    margin: 10,
                    borderRadius: 10,
                  }}
                /> */}
              </View>
              {/* button of order now */}
              <TouchableOpacity
                onPress={() => this.refs.addCartConfirm.open()}
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
                    style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                    Order Now{' '}
                  </Text>
                  <Icon name="shopping-cart" type="font-awesome" color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
              {/* Badges */}
            </View>
          </View>
          <Modal
            style={{
              alignItems: 'center',
              marginTop: 30,
              height: 200,
              width: 300,
              borderRadius: 30,
              backgroundColor: '#fff',
            }}
            position={'center'}
            ref={'addCartConfirm'}
            backdrop={true}
            isDisabled={this.state.isDisabled}
            coverScreen={true}
            backdropPressToClose={true}>
            <View style={{margin: 20}}>
              <LottieView
                autoPlay
                source={jsons.cart}
                style={{
                  width: 400,
                  marginTop: -78,
                  height: 400,
                }}
              />
              <Text
                style={{
                  marginTop: -250,
                  textAlign: 'center',
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#312717',
                }}>
                Your Order has been added to cart
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    borderRadius: 15,
                    backgroundColor: '#312717',
                    justifyContent: 'center',
                    padding: 12,
                    marginRight: 10,
                    flexDirection: 'row',
                  }}
                  onPress={() => {
                    this.refs.addCartConfirm.close();
                    this.props.navigation.pop();
                  }}>
                  <Text style={{color: '#fff', fontSize: 13, marginRight: 3}}>
                    Continue shopping
                  </Text>
                  <Icon
                    name="shoppingcart"
                    type="antdesign"
                    size={20}
                    color="#fff"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderRadius: 15,
                    backgroundColor: '#312717',
                    justifyContent: 'center',
                    padding: 12,
                    marginLeft: 10,
                    flexDirection: 'row',
                  }}
                  onPress={() => this.addCart(products)}>
                  <Text style={{color: '#fff', fontSize: 13, marginRight: 3}}>
                    cart
                  </Text>
                  <Icon
                    name="shopping-bag"
                    type="entypo"
                    size={20}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Modal
            style={{
              alignItems: 'center',
              marginTop: 30,
              height: 200,
              width: 340,
              borderRadius: 30,
              backgroundColor: '#fff',
            }}
            position={'center'}
            ref={'popupError'}
            backdrop={true}
            isDisabled={this.state.isDisabled}
            coverScreen={true}
            backdropPressToClose={true}>
            <View style={{margin: 20}}>
              <LottieView
                autoPlay
                source={jsons.cart}
                style={{
                  width: 400,
                  marginTop: -78,
                  height: 400,
                }}
              />
              <Text
                style={{
                  marginTop: -250,
                  textAlign: 'center',
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#312717',
                }}>
                This product is already available in your cart
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    borderRadius: 15,
                    backgroundColor: '#312717',
                    justifyContent: 'center',
                    padding: 12,
                    marginRight: 10,
                    flexDirection: 'row',
                  }}
                  onPress={() => {
                    this.refs.popupError.close();
                    this.props.navigation.pop();
                  }}>
                  <Text style={{color: '#fff', fontSize: 13, marginRight: 3}}>
                    Continue shopping
                  </Text>
                  <Icon
                    name="shoppingcart"
                    type="antdesign"
                    size={20}
                    color="#fff"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderRadius: 15,
                    backgroundColor: '#312717',
                    justifyContent: 'center',
                    padding: 12,
                    marginLeft: 10,
                    flexDirection: 'row',
                  }}
                  onPress={() =>{
                     this.refs.popupError.close()
                     this.props.navigation.navigate('Cart',{ onGoBack: () => this.updateParent(),}) }}>
                  <Text style={{color: '#fff', fontSize: 13, marginRight: 3}}>
                    cart
                  </Text>
                  <Icon
                    name="shopping-bag"
                    type="entypo"
                    size={20}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </>
    );
  }
}

// export default Dashboard
function mapStateToProps(state){
  return {
    getCartItem : state.cart.cartItem,
  }
}

export default connect(mapStateToProps,{setCartItem})(ProductDetail)






  