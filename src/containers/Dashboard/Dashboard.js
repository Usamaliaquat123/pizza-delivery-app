import React, {Component} from 'react';
import {Header, Card, Button, Icon} from 'react-native-elements';
import {
  View,
  Text,
  ScrollView,
  Image,
  Alert ,
  TouchableOpacity,
  FlatList,

} from 'react-native';
import {styles} from './Dashboard.styles';
import {Colors, Img} from './../../theme';
import LinearGradient from 'react-native-linear-gradient';
import {SCREEN_WIDTH, STATUS_BAR_HEIGHT} from './../../utils/constants';
import { connect } from "react-redux";
import data from './../mockdb/data';
import Api from './../../Services/Api';
import AsyncStorage from '@react-native-community/async-storage';
import { setAllFeaturedProducts,setAllNormalProducts } from './../../actions';
// import { setAllFeaturedProducts } from './../../actions/productsAction';
const  base = 'http://pizza.softcob.com/img/menu_pic/'; 
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: [],
      food: [],
      cart: [],
    };
  }
  componentDidMount() {
    this.props.setAllFeaturedProducts()
    this.props.setAllNormalProducts()
  }

  addCart(dish, type) {
    if(type == "featured"){
      for (let i = 0; i < this.props.featuredProducts.length; i++) {
          if(this.props.featuredProducts[i].id == dish.id){
            this.props.featuredProducts[i]['cart'] = true
            this.setState({ })
          }
      }
    }else{
      for (let i = 0; i < this.props.normProducts.length; i++) {
          if(this.props.normProducts[i].id == dish.id){
            this.props.normProducts[i]['cart'] = true
            this.setState({ })
          }
      }

    }
  }

  removeCart(dishes,type){
    if (type == "featured") {
      for (let i = 0; i < this.props.featuredProducts.length; i++) {
          if(this.props.featuredProducts[i].id == dishes.id){
            this.props.featuredProducts[i]['cart'] = false
            this.setState({ })
          }
      }
    }else{
      for (let i = 0; i < this.props.normProducts.length; i++) {
          if(this.props.normProducts[i].id == dishes.id){
            this.props.normProducts[i]['cart'] = false
            this.setState({ })
          }
      }
    }

  }
productDetailItem(dishes){
   for (const food of this.state.food) {
      if(food.cart == true){
        this.state.cart.push(food)
      }
    }
     for (const featured of this.state.featured) {
      if(featured.cart == true){
        this.state.cart.push(featured)
      }
    }
    console.log(this.state.cart);
    
   this.props.navigation.navigate('ProductDetail', {
      product: dishes,
      cartItem : this.state.cart 
   })
}
  goToCart(){
    for (const food of this.state.food) {
      if(food.cart == true){
      
        this.state.cart.push(food)
      }
    }
     for (const featured of this.state.featured) {
      if(featured.cart == true){
        this.state.cart.push(featured)
      }
    }
    
    this.props.navigation.navigate('Cart', {cartItem : this.state.cart })
  }

  render() {
    const {featuredProducts, normProducts,getCartItem } = this.props
    console.log(featuredProducts)
    console.log(normProducts)
    console.log(getCartItem)
    return (
      <>
        <Header
          containerStyle={{
            marginTop: Platform.OS === 'ios' ? 0 : -STATUS_BAR_HEIGHT,
          }}
          backgroundColor="transparent"
          placement="center"
          leftComponent={
            <TouchableOpacity >
              <Icon
                name="restaurant-menu"
                type="material"
                color={Colors.theme_color.orange}
              />
            </TouchableOpacity>
          }
          rightComponent={
            <TouchableOpacity
              onPress={() => this.goToCart()}>
              <Icon
                name="shopping-cart"
                type="entypo"
                color={Colors.theme_color.orange}
              />
            </TouchableOpacity>
          }
        />
        <ScrollView>
          <View style={{backgroundColor: '#fff'}}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: Colors.theme_color.orange,
                  fontWeight: 'bold',
                  fontSize: 40,
                }}>
                Food Menu
              </Text>
              <View
                style={{
                  borderBottomColor: Colors.theme_color.orange,
                  borderBottomWidth: 1,
                  width: 200,
                  alignSelf: 'center',
                }}
              />

              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 17,
                  color: '#322514',
                  margin: 10,
                  opacity: 0.6,
                }}>
                Choose your best pizza have a great day !
              </Text>
            </View>
            {/* Featured Pizza's */}

            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              {featuredProducts.map(dishes => (
                <TouchableOpacity
                  style={{margin: 5}}
                  onPress={() => this.productDetailItem(dishes)
                  }>
                  <LinearGradient
                    colors={['#FE4A00', '#F84D00', '#FC8C00']}
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 0}}
                    style={{
                      height: 215,
                      // alignItems: 'flex-end',
                      justifyContent: 'center',
                      width: 150,
                      borderRadius: 18,
                    }}>
                    <View
                      style={{
                        marginTop: -15,
                        flexDirection: 'row',
                      }}>
                      {dishes.offer != '' && (
                        <View
                          style={{
                            alignContent: 'flex-start',
                            flexDirection: 'row',
                            marginLeft: 10,
                          }}>
                          <Icon
                            name="tags"
                            type="antdesign"
                            color="#fff"
                            size={30}
                          />
                          <Text
                            style={{
                              color: '#ffff',
                              fontWeight: 'bold',
                              fontSize: 12,
                              marginTop: 3,
                            }}>
                            {dishes.offer}% off
                          </Text>
                        </View>
                      )}
                      <View
                        style={{
                          marginLeft: 'auto',
                        }}>
                        {dishes.cart == true && (
                        <TouchableOpacity
                          style={{marginRight: 15}}
                          onPress={() => this.removeCart(dishes,"featured")}>
                          <Icon
                            name="shopping-cart"
                            type="entypo"
                            color="#fff"
                          />
                        </TouchableOpacity>
                        )} 
                        {dishes.cart == false && (
                        <TouchableOpacity
                          style={{marginRight: 15}}
                          onPress={() => this.addCart(dishes, "featured")}>
                          <Icon
                            name="shoppingcart"
                            type="antdesign"
                            color="#fff"
                          />
                        </TouchableOpacity>
                        )}
                       
                      </View>
                    </View>
                    <Image
                       source={{uri:base+dishes.picture  }} style={{ width: 140, height: 140 ,marginLeft: 5  }}
                    />
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={{margin: 10}}>
              {/* products */}
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: '#372611',
                  margin: 4,
                }}>
                More
              </Text>
              <ScrollView
              // showsHorizontalScrollIndicator={false}
              // horizontal={true}>
              >
                <FlatList
                  data={normProducts}
                  numColumns={2}
                  style={{ width: SCREEN_WIDTH -20 }}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() =>this.productDetailItem(item)}
                      style={{margin: 5}}>
                      <LinearGradient
                        colors={['#E5E5E5', '#E5E5E5', '#E5E5E5']}
                        start={{x: 0, y: 1}}
                        end={{x: 1, y: 0}}
                        style={{
                          height: 215,
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: SCREEN_WIDTH - 230,
                          // borderRadius: 18,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            height: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <View style={{marginLeft: 35, marginRight: 35}}>
                            {item.offer != '' && (
                              <View
                                style={{
                                  backgroundColor: '#FE4A00',
                                  padding: 5,
                                  alignSelf: 'center',
                                  marginTop: -20,
                                  marginBottom: 15,
                                  borderRadius: 4,
                                }}>
                                <Text
                                  style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    color: '#fff',
                                  }}>
                                  {item.offer}% off
                                </Text>
                              </View>
                            )}
                          </View>
                          {/* Styling diff */}
                          {item.offer == '' && (
                            <View style={{marginRight: -60}}>
                              <View style={{marginTop: -20}}>
                              {item.cart == false && (
                                <TouchableOpacity
                                  onPress={() => this.addCart(item)}>
                                  <Icon
                                    name="shoppingcart"
                                    type="antdesign"
                                    color="#FC8C00"
                                  />
                                </TouchableOpacity>
                              )}
                              {item.cart == true && (
                                <TouchableOpacity
                                  onPress={() => this.removeCart(item)}>
                                  <Icon
                                    name="shopping-cart"
                                    type="entypo"
                                    color="#FC8C00"
                                  />
                                </TouchableOpacity>
                              )}
                              </View>
                            </View>
                          )}

                          {/* Styling diff */}
                          {item.offer != '' && (
                            <View style={{marginTop: -20}}>
                             {item.cart == false && (
                                <TouchableOpacity
                                  onPress={() => this.addCart(item)}>
                                  <Icon
                                    name="shoppingcart"
                                    type="antdesign"
                                    color="#FC8C00"
                                  />
                                </TouchableOpacity>
                               )} 
                             {item.cart == true && (
                                <TouchableOpacity
                                  onPress={() => this.removeCart(item)}>
                                  <Icon
                                    name="shopping-cart"
                                    type="entypo"
                                    color="#FC8C00"
                                  />
                                </TouchableOpacity>
                               )} 
                              
                            </View>
                          )}
                        </View>
                        <Image
                          source={{uri:base+item.picture  }} style={{ width: 146, height: 146 }}
                        />
                      </LinearGradient>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id}
                />

                <View style={{flexDirection: 'row'}}>
                
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

// export default Dashboard
function mapStateToProps(state){
  return {
    featuredProducts : state.products.featuredProducts,
    normProducts : state.products.normalProd,
    getCartItem : state.cart.cartItem,
  }
}



export default connect(mapStateToProps, {
    setAllFeaturedProducts,
    setAllNormalProducts
  })(Dashboard)























