import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image, BackHandler} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {styles} from './Cart.styles';
import {Colors, Img} from './../../../theme';
import {STATUS_BAR_HEIGHT, SCREEN_WIDTH} from './../../../utils/constants';

import AsyncStorage from '@react-native-community/async-storage';
import  LinearGradient  from 'react-native-linear-gradient';
import data from './../../mockdb/data';
import Api from './../../../Services/Api';
import Modal from "react-native-modalbox";
import { setCartItem ,setAllSubmitOrders} from './../../../actions';
import { connect } from 'react-redux';
// import { setCartItem } from './../../../actions/productsAction';
const  base = 'http://pizza.softcob.com/img/menu_pic/'; 
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // products : this.props.navigation.getParam('cartItem'),
      count: 1,
      total: 0,
      user_id : 12,
      // quantity: [],
      errMsg: "",
      finalizeItems: []
    };
  }

  componentDidMount() {
    if(this.props.getCartItem != null ){
    
    for (let i = 0; i < this.props.getCartItem.length; i++) {
      this.props.getCartItem[i]['price']
      this.state.total += this.props.getCartItem[i]['price']
      this.setState({ })
     }
    }
    
  }

 
  decreamentItem(id) {
   for (let i = 0; i < this.props.getCartItem.length; i++) {
        if (this.props.getCartItem[i].id == id) {
          if(this.props.getCartItem[i]['quantity'] == 1){
            return null
          }
          this.setState({
            
          })
          this.props.getCartItem[i]['quantity'] -= 1
          console.log(this.props.getCartItem[i]['price']);
          this.props.getCartItem[i]['price'] -= parseInt(this.props.getCartItem[i]['orignalPrice'])
          this.state.total -= parseInt(this.props.getCartItem[i]['orignalPrice'])
        }
      }
  }
  increamentItem(id) {  
      for (let i = 0; i < this.props.getCartItem.length; i++) {
        if (this.props.getCartItem[i].id == id) {
          this.setState({
            
          })
          this.props.getCartItem[i]['quantity'] += 1
          let orgnalPrce = parseInt(this.props.getCartItem[i]['orignalPrice'])
          console.log(orgnalPrce);
          
          this.state.total +=  orgnalPrce
          this.props.getCartItem[i]['price'] +=  orgnalPrce
        }
      }
  }


  delProductToCart(products){
 

//  for (let p = 0; p < this.props.featuredProducts.length; p++) {
//     if(this.props.featuredProducts[p] == products.id){
//      this.props.featuredProducts[p]['cart'] = false
//     }
//  }
//  for (let p = 0; p < this.props.normProducts.length; p++) {
//     if(this.props.normProducts[p] == products.id){
//      this.props.normProducts[p]['cart'] = false
//     }
//  }


  for (let i = 0; i < this.props.getCartItem.length; i++) {
    if(this.props.getCartItem[i].id == products.id){
      this.state.total -= this.props.getCartItem[i]['price']
      this.props.getCartItem.splice(i,1);
      this.setState({ })
    }    
  }
  }
  paymentProceed(data) {
    for (let i = 0; i < this.props.getCartItem.length; i++) {
        this.state.finalizeItems.push(`{"menu_id":${ this.props.getCartItem[i].id},"price":${this.props.getCartItem[i].price},"quantity":${this.props.getCartItem[i].quantity}}`)
    }
   const params  = {
      customer_id: "8",
      customer_address: "Mirpur Azad Kashmir",
      order_items: this.state.finalizeItems
   }
    Api.cart(params).then(res => {
      console.log(res);
        if(res.status == 'Ok'){
            this.props.getCartItem.splice(0, this.props.getCartItem.length)
            this.setState({ total : 0 })
            this.setState({ })
            this.props.setAllSubmitOrders()
            this.props.navigation.navigate('OrdrSubmit')
        }
    }).catch(err =>  console.log(err))
  
    
  }
  render() {
        const {featuredProducts, normProducts,getCartItem } = this.props
        console.log(getCartItem);
        
    return (
      <>
        <Header
          containerStyle={{
            marginTop: Platform.OS === 'ios' ? 0 : -STATUS_BAR_HEIGHT,
          }}
          backgroundColor="#E5E5E5"
          placement="center"
          leftComponent={
            <TouchableOpacity onPress={() => 
            {
              // this.props.navigation.state.params.updateDate('sd')
              this.props.navigation.state.params.onGoBack()              
              this.props.navigation.goBack()}}>
              <Icon
                name="restaurant-menu"
                type="material"
                color={'#382715'}
              />
            </TouchableOpacity>
          }
          rightComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MainTab')}>
              <Icon
                name="barchart"
                type="antdesign"
                color={'#382715'}
              />
            </TouchableOpacity>
          }
        />
        <ScrollView>


          {getCartItem != null && (
            <View>
              {getCartItem.map(products => (
  <View
            style={{
              backgroundColor: '#E5E5E5',
              height: 460,
              marginTop: 15,
      borderRadius: 40,
              width: SCREEN_WIDTH - 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => this.delProductToCart(products)} style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 10}}>
            <Icon name="cross" type="entypo" size={30} color="#382715" />
            </TouchableOpacity>
            <View style={{ alignItems: 'center',}}>
            <Image source={{uri:base+products.picture}} style={{ width: 200, height: 200 }} />
            </View>
            {/* {this.state.product.offer != "" && ( */}



            <View
              style={{
                padding: 10,
                justifyContent: 'center',
                // borderRadius: 10,
              }}>

              <Text style={{ fontSize: 25, fontWeight: 'bold', color: "#FE4A00", textAlign: "center"}}>{products.title}</Text>
              
            <View style={{ flexDirection: 'row', alignSelf: 'center',}}>
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
            <Text style={{ color: "#FE4A00", fontWeight: "bold", fontSize: 12, textAlign: "center" }}>{products.overview}</Text>
            {/* quantity */}
            <View style={{ flexDirection: "row", marginTop: 15, alignSelf: 'center', }}>
                <Icon name="left" type="antdesign" color="#FE4A00" size={30} iconStyle={{ marginTop: 1 }} onPress={() => this.decreamentItem(products.id)} />

                <Text style={{ color: "#FE4A00", fontSize: 18, fontWeight: "bold", marginLeft: 20, marginRight: 20 }}>{products.quantity}</Text>
                <Icon name="right" type="antdesign" color="#FE4A00" size={30} iconStyle={{ marginTop: 1, }} onPress={() => this.increamentItem(products.id)} />
            </View>

            <View style={{ padding: 10, backgroundColor: "#FE4A00", color: "#fff", alignSelf: "center", borderRadius: 10, marginTop: 10 }}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Rs {products.price}</Text>
            </View>
            </View>
            {/* )} */}
          </View>
        ))}
            
            </View>
          )}

      
        
<View style={{ alignSelf: "center", marginTop: 15 }}>
    <Text style={{ fontWeight: "bold", fontSize: 45, textAlign: "center", color:"#382715" }}>Total {'  '} Rs {this.state.total}</Text>

</View>




        <TouchableOpacity
        onPress={() => this.refs.modal3.open()}
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
              </TouchableOpacity>


          <Modal style={{    
    alignItems: 'center',
       marginTop : 30,
    height: 200,
    width: 300,
    borderRadius: 30,
    backgroundColor : '#fff' }} position={"center"} ref={"modal3"} backdrop={true} isDisabled={this.state.isDisabled} coverScreen={true} backdropPressToClose={true}>
           
           <View style={{ margin: 20 }}>
           
            <Icon
                name="restaurant-menu"
                type="material"
                size={50}
                color={'#312717'}
              />
              <Text style={{marginTop: 15, textAlign: "center", fontSize: 15, fontWeight: 'bold', color: "#FD5D00" }}>Are you sure you want to place your order...!</Text>
              <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                <TouchableOpacity style={{ borderRadius: 15 , backgroundColor: "#FD5D00", justifyContent: 'center', padding: 12, marginRight: 10 }} onPress={() => this.refs.modal3.close()}>
                  <Text style={{ color:"#fff", fontSize: 13 }}>No i don't</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 15 , backgroundColor: "#FD5D00", justifyContent: 'center', padding: 12, marginLeft: 10 }} onPress={() => {this.paymentProceed(this.state.total)
                this.refs.modal3.close()
                }}>
                  <Text style={{ color:"#fff", fontSize: 13 }}>Place Now..!</Text>
                </TouchableOpacity>
              </View>
           </View>
           
          </Modal>

          <Modal style={{    
    alignItems: 'center',
       marginTop : 30,
    height: 200,
    width: 300,
    borderRadius: 30,
    backgroundColor : '#fff' }} position={"center"} ref={"orderPlaced"} backdrop={true} isDisabled={this.state.isDisabled} coverScreen={true} backdropPressToClose={true}>
           
           <View style={{ margin: 20 }}>
           
            <Icon
                name="restaurant-menu"
                type="material"
                size={50}
                color={'#312717'}
              />
              <Text style={{marginTop: 15, textAlign: "center", fontSize: 15, fontWeight: 'bold', color: "#FD5D00" }}>Are you sure you want to place your order...!</Text>
              <View style={{  alignSelf: 'center', marginTop: 10 }}>
                <TouchableOpacity style={{ borderRadius: 15 , backgroundColor: "#372715", justifyContent: 'center', padding: 12}} onPress={() => this.refs.orderPlaced.close()}>
                  <Text style={{ color:"#fff", fontSize: 13 }}>Review Your Order...</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={{ borderRadius: 15 , backgroundColor: "#FD5D00", justifyContent: 'center', padding: 12, marginLeft: 10 }} onPress={() => {this.paymentProceed(this.state.total)
                this.refs.modal3.close()
                }}>
                  <Text style={{ color:"#fff", fontSize: 13 }}>Place Now..!</Text>
                </TouchableOpacity> */}
              </View>
           </View>
           
          </Modal>


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
    setCartItem,
    setAllSubmitOrders
  })(Cart)





