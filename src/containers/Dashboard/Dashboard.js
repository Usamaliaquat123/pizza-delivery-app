import React, {Component} from 'react';
import {Header, Card, Button, Icon,Badge} from 'react-native-elements';
import {
  View,
  Text,
  ScrollView,
  Image,
  Linking ,
  Alert ,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {styles} from './Dashboard.styles';
import {Colors, Img} from './../../theme';
import LinearGradient from 'react-native-linear-gradient';
import {SCREEN_WIDTH, STATUS_BAR_HEIGHT} from './../../utils/constants';
import { connect } from "react-redux";
import Modal from "react-native-modalbox";
import data from './../mockdb/data';
import Api from './../../Services/Api';
import AsyncStorage from '@react-native-community/async-storage';
import { setAllFeaturedProducts,setAllNormalProducts,setCartItem } from './../../actions';
import InAppBrowser from 'react-native-inappbrowser-reborn'
// import { setAllFeaturedProducts, setCartItem } from './../../actions/productsAction';
const  base = 'http://pizza.softcob.com/img/menu_pic/'; 
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: [],
      food: [],
      cart: [],
    };
    // this.updateParent = this.updateParent.bind(this)
  }
  componentDidMount() {
    this.props.setAllFeaturedProducts()
    this.props.setAllNormalProducts()
    // this.refs.aboutUs.open()
  }


  updateParent() {
    this.props.setCartItem()
  if(this.props.getCartItem.length == 0){
   for (let i = 0; i < this.props.featuredProducts.length; i++) {
     this.props.featuredProducts[i]['cart'] = false
          this.setState({  })
   }
  for(let i = 0; i < this.props.normProducts.length; i++) {
     this.props.normProducts[i]['cart'] = false
          this.setState({  })
   }
  }
  else{
    // console.log('sd');
    this.render()
  this.setState({ })
    for (const prod of this.props.getCartItem) {
        for (const featProd of this.props.featuredProducts) {
          if(prod.id == featProd) return  featProd['cart'] = true
          if(prod.id != featProd) return  featProd['cart'] = false
        }
    }
  }



  }

  addCart(dish, type) {
    if(type == "featured"){
        // this.props.setCartItem(dish)
           this.props.getCartItem.push(dish)
      for (let i = 0; i < this.props.featuredProducts.length; i++) {
          if(this.props.featuredProducts[i].id == dish.id){
            this.props.featuredProducts[i]['cart'] = true
            this.setState({ })
          }
      }
    }else{
      //  this.props.setCartItem(dish)
       this.props.getCartItem.push(dish)
      for (let i = 0; i < this.props.normProducts.length; i++) {
          if(this.props.normProducts[i].id == dish.id){
            this.props.normProducts[i]['cart'] = true
            this.setState({ })
          }
      }

    }
  }

  removeCart(dishes,type){

  for (let i = 0; i < this.props.getCartItem.length; i++) {
      if(this.props.getCartItem[i].id == dishes.id){
        this.props.getCartItem.splice(i,1)
      } 
  }
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
   this.props.navigation.navigate('ProductDetail', {
      product: dishes,
      onGoBack: () => this.updateParent(),
   })
}
goToCart(){
    this.props.navigation.navigate('Cart',{onGoBack: () => this.updateParent()})
  }



 async openLink(url) {
    try {
      // const url = 'https://www.google.com'
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'overFullScreen',
          modalTransitionStyle: 'partialCurl',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: '#F54B00',
          secondaryToolbarColor: 'black',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right'
          },
          headers: {
            'my-custom-header': 'my custom header value'
          }
        })
        // Alert.alert(JSON.stringify(result))
      }
      else Linking.openURL(url)
    } catch (error) {
      Alert.alert(error.message)
    }
  }


  render() {
    const {featuredProducts, normProducts,getCartItem } = this.props
    console.log(featuredProducts)
    console.log(featuredProducts)
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
            <TouchableOpacity onPress={() => this.refs.aboutUs.open()}>
              <Icon
                name="restaurant-menu"
                type="material"
                color={Colors.theme_color.orange}
              />
            </TouchableOpacity>
          }
          rightComponent={ <View>

            {this.props.getCartItem.length != 0 && (

            <Badge value={this.props.getCartItem.length} containerStyle={{ position: 'absolute', top: -10,fontSize: 5, left: 10  , zIndex: 2,}} badgeStyle={{borderColor: 'transparent', fontSize: 5,backgroundColor: '#35250A' }} status="error" />
            )}
          
            <TouchableOpacity
              onPress={() => this.goToCart()}>
              <Icon
                name="shopping-cart"
                type="entypo"
                color={Colors.theme_color.orange}
              />
            </TouchableOpacity>
          </View>
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
                  contentContainerStyle={{alignItems: 'center'  }}
                  // style={{ alignItems: 'center' }}
                  renderItem={({item}) => (

                      
                     <TouchableOpacity
                  style={{margin: 5}}
                  onPress={() => this.productDetailItem(item)
                  }>
                  <LinearGradient
                    colors={['#E5E5E5', '#E5E5E5', '#E5E5E5']}
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 0}}
                    style={{
                      height: 215,
                      // alignItems: 'flex-end',
                      justifyContent: 'center',
                      width: SCREEN_WIDTH - 200,
                      borderRadius: 18,
                    }}>
                    <View
                      style={{
                        marginTop: -15,
                        flexDirection: 'row',
                      }}>
                      {item.offer != '' && (
                        <View
                          style={{
                            alignContent: 'flex-start',
                            flexDirection: 'row',
                            padding: 5,
                            backgroundColor: "#FE4A00",
                            marginLeft: 10,
                            marginTop: -18,
                            borderRadius: 10,
                            // paddingBottom: -
                          }}>
                          <Icon
                            name="tags"
                            type="antdesign"
                            color="#fff"
                            size={30}
                          />
                          <Text
                            style={{
                              color: '#fff',
                              fontWeight: 'bold',
                              fontSize: 12,
                              marginTop: 10,
                            }}>
                            {item.offer}% off
                          </Text>
                        </View>
                      )}
                      <View
                        style={{
                          marginLeft: 'auto',
                        }}>
                        {item.cart == true && (
                        <TouchableOpacity
                          style={{marginRight: 15}}
                          onPress={() => this.removeCart(item)}>
                          <Icon
                            name="shopping-cart"
                            type="entypo"
                            color="#fff"
                          />
                        </TouchableOpacity>
                        )} 
                        {item.cart == false && (
                        <TouchableOpacity
                          style={{marginRight: 15}}
                          onPress={() => this.addCart(item)}>
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
                       source={{uri:base+item.picture  }} style={{ width: 140, height: 140 ,marginLeft: 5  }}
                    />
                  </LinearGradient>
                </TouchableOpacity>
                    // <TouchableOpacity
                    //   onPress={() =>this.productDetailItem(item)}
                    //   style={{margin: 5}}>
                    //   <LinearGradient
                    //     colors={['#E5E5E5', '#E5E5E5', '#E5E5E5']}
                    //     start={{x: 0, y: 1}}
                    //     end={{x: 1, y: 0}}
                    //     style={{
                    //       height: 215,
                    //       alignItems: 'center',
                    //       // padding: 10,
                    //       justifyContent: 'center',
                    //       width: SCREEN_WIDTH - 150,
                    //       // borderRadius: 18,
                    //     }}>
                    //     <View
                    //       style={{
                    //         flexDirection: 'row',
                    //         height: 30,
                    //         justifyContent: 'center',
                    //         alignItems: 'center',
                    //       }}>
                    //       <View style={{marginLeft: 35, marginRight: 35}}>
                    //         {item.offer != '' && (
                    //           <View
                    //             style={{
                    //               backgroundColor: '#FE4A00',
                    //               padding: 5,
                    //               alignSelf: 'center',
                    //               marginTop: -20,
                    //               marginBottom: 15,
                    //               borderRadius: 4,
                    //             }}>
                    //             <Text
                    //               style={{
                    //                 textAlign: 'center',
                    //                 fontWeight: 'bold',
                    //                 color: '#fff',
                    //               }}>
                    //               {item.offer}% off
                    //             </Text>
                    //           </View>
                    //         )}
                    //       </View>
                    //       {/* Styling diff */}
                    //       {item.offer == '' && (
                    //         <View style={{marginRight: -60}}>
                    //           <View style={{marginTop: -20}}>
                    //           {item.cart == false && (
                    //             <TouchableOpacity
                    //               onPress={() => this.addCart(item)}>
                    //               <Icon
                    //                 name="shoppingcart"
                    //                 type="antdesign"
                    //                 color="#FC8C00"
                    //               />
                    //             </TouchableOpacity>
                    //           )}
                    //           {item.cart == true && (
                    //             <TouchableOpacity
                    //               onPress={() => this.removeCart(item)}>
                    //               <Icon
                    //                 name="shopping-cart"
                    //                 type="entypo"
                    //                 color="#FC8C00"
                    //               />
                    //             </TouchableOpacity>
                    //           )}
                    //           </View>
                    //         </View>
                    //       )}

                    //       {/* Styling diff */}
                    //       {item.offer != '' && (
                    //         <View style={{marginTop: -20}}>
                    //          {item.cart == false && (
                    //             <TouchableOpacity
                    //               onPress={() => this.addCart(item)}>
                    //               <Icon
                    //                 name="shoppingcart"
                    //                 type="antdesign"
                    //                 color="#FC8C00"
                    //               />
                    //             </TouchableOpacity>
                    //            )} 
                    //          {item.cart == true && (
                    //             <TouchableOpacity
                    //               onPress={() => this.removeCart(item)}>
                    //               <Icon
                    //                 name="shopping-cart"
                    //                 type="entypo"
                    //                 color="#FC8C00"
                    //               />
                    //             </TouchableOpacity>
                    //            )} 
                              
                    //         </View>
                    //       )}
                    //     </View>
                    //     <Image
                    //       source={{uri:base+item.picture  }} style={{ width: 146, height: 146 }}
                    //     />
                    //   </LinearGradient>
                    // </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id}
                />



    <View style={{ alignSelf: 'center', marginTop: 10 , flexDirection: 'row'}} >
      <Text style={{ fontSize: 12, color: '#372715', fontWeight: 'bold' }}>This product is developed by the </Text>

<TouchableOpacity onPress={() => this.openLink('https://softcob.com/')} >
      <Text style={{ fontSize: 12, color: '#F54B00', fontWeight: 'bold' }}>SoftCob Team</Text>
</TouchableOpacity>

    </View>

    <View style={{ alignSelf: 'center', marginBottom: 10 , flexDirection: 'row'}} >
      <Text style={{ fontSize: 12, color: '#372715', fontWeight: 'bold' }}>Read the </Text>
    <TouchableOpacity onPress={() => this.openLink('http://pizza.softcob.com/privacy_policy.html')}  >
    
      <Text style={{ fontSize: 12, color: '#F54B00', fontWeight: 'bold' }}>Privacy and Policy </Text>
    </TouchableOpacity>
      <Text style={{ fontSize: 12, color: '#372715', fontWeight: 'bold' }}>and </Text>

<TouchableOpacity onPress={() => this.openLink('http://pizza.softcob.com/terms_and_conditions.html')} >
      <Text style={{ fontSize: 12, color: '#F54B00', fontWeight: 'bold' }}>Terms and Condition</Text>
</TouchableOpacity>

    </View>

              </ScrollView>
            </View>
          </View>

            <Modal style={{    
    alignItems: 'center',
       marginTop : 30,
    height: 250,
    width: 300,
    borderRadius: 30,
    backgroundColor : '#fff' }} position={"center"} ref={"aboutUs"} backdrop={true} isDisabled={this.state.isDisabled} coverScreen={true} backdropPressToClose={true}>
           
           <View style={{ margin: 20, alignItems: 'center' }}>
           
            <Icon
                name="flow-tree"
                type="entypo"
                size={50}
                color={'#F54B00'}
              />
              <Text style={{marginTop: 5, textAlign: "center", fontSize: 20, fontWeight: 'bold', color: "#372715" }}>About us</Text>
             {/* App devloper */}
                <Text>Credits</Text>
              <View style={{ flexDirection: 'row', marginTop:10 }}>
             
              <TouchableOpacity onPress={() => this.openLink('https://www.linkedin.com/in/usamaliaquat/')}>
                <Text style={{ color: "#F54B00", fontWeight: 'bold', fontSize: 12 }}>Usama liaquat</Text>
              
              </TouchableOpacity>
            <Icon
                name="mobile1"
                type="antdesign"
                size={20}
                color={'#F54B00'}
              />
                <Text>App Developer</Text>
                </View>
              <View style={{ flexDirection: 'row', marginTop:10 }}>
              <TouchableOpacity onPress={() => this.openLink('https://www.facebook.com/profile.php?id=100005580167356') }>
              
                <Text style={{ color: "#F54B00", fontWeight: 'bold', fontSize: 12 }}>Arsalan Ahmed</Text>
              </TouchableOpacity>
            <Icon
                name="fork"
                type="antdesign"
                size={20}
                color={'#F54B00'}
              />
                <Text>Backend</Text>
                </View>
  <View style={{ alignSelf: 'center', marginTop: 10 , flexDirection: 'row'}} >
      <Text style={{ fontSize: 10, color: '#372715', fontWeight: 'bold' }}>This product is developed by the </Text>

<TouchableOpacity onPress={() => this.openLink('https://softcob.com/')} >
      <Text style={{ fontSize: 10, color: '#F54B00', fontWeight: 'bold' }}>SoftCob Team</Text>
</TouchableOpacity>

    </View>

    <View style={{ alignSelf: 'center', marginBottom: 10 , flexDirection: 'row'}} >
      <Text style={{ fontSize: 10, color: '#372715', fontWeight: 'bold' }}>Read the </Text>
    <TouchableOpacity onPress={() => this.openLink('http://pizza.softcob.com/privacy_policy.html')}  >
    
      <Text style={{ fontSize: 10, color: '#F54B00', fontWeight: 'bold' }}>Privacy and Policy </Text>
    </TouchableOpacity>
      <Text style={{ fontSize: 10, color: '#372715', fontWeight: 'bold' }}>and </Text>

<TouchableOpacity onPress={() => this.openLink('http://pizza.softcob.com/terms_and_conditions.html')} >
      <Text style={{ fontSize: 10, color: '#F54B00', fontWeight: 'bold' }}>Terms and Condition</Text>
</TouchableOpacity>

    </View>
             


             
             
              {/* <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}> */}
                {/* <TouchableOpacity style={{ borderRadius: 15 , backgroundColor: "#FD5D00", justifyContent: 'center', padding: 12, marginRight: 10 }} onPress={() => this.refs.aboutUs.close()}>
                  <Text style={{ color:"#fff", fontSize: 13 }}>No i don't</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 15 , backgroundColor: "#FD5D00", justifyContent: 'center', padding: 12, marginLeft: 10 }} onPress={() => {this.paymentProceed(this.state.total)
                this.refs.modal3.close()
                }}>
                  <Text style={{ color:"#fff", fontSize: 13 }}>Place Now..!</Text>
                </TouchableOpacity> */}
              {/* </View> */}
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
    featuredProducts : state.products.featuredProducts,
    normProducts : state.products.normalProd,
    getCartItem : state.cart.cartItem,
  }
}



export default connect(mapStateToProps, {
    setAllFeaturedProducts,
    setAllNormalProducts,
    setCartItem
  })(Dashboard)























