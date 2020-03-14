import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {styles} from './Cart.styles';
import {Colors, Img} from './../../../theme';
import {STATUS_BAR_HEIGHT, SCREEN_WIDTH} from './../../../utils/constants';
import AsyncStorage from '@react-native-community/async-storage';
import  LinearGradient  from 'react-native-linear-gradient';
import data from './../../mockdb/data';
import Api from './../../../Services/Api';
import Modal from "react-native-modalbox";
const  base = 'http://pizza.softcob.com/img/menu_pic/'; 
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products : this.props.navigation.getParam('cartItem'),
      count: 1,
      total: 0,
      user_id : 12,
      productIds: [],
      quantity: [],
      errMsg: ""
    };
  }

  componentDidMount() {
    // console.log(this.props.navigation.getParam('cartItem'))
    // AsyncStorage.getItem('cart')
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // this.refs.modal3.open()
    for (let i = 0; i < this.state.products.length; i++) {
      this.state.products[i]['quantity'] = 1
      this.state.products[i]['orignal_price'] = this.state.products[i]['price'] 
      this.state.total += this.state.products[i]['orignal_price']
      this.setState({ })
     }
      
  }


  decreamentItem(id) {
   for (let i = 0; i < this.state.products.length; i++) {
        if (this.state.products[i]._id == id) {
          if(this.state.products[i]['quantity'] == 1){
            return null
          }
          this.setState({
            
          })
          this.state.products[i]['quantity'] -= 1
          console.log(this.state.products[i]['price']);
          this.state.products[i]['price'] -= this.state.products[i]['orignal_price']
          this.state.total -= this.state.products[i]['orignal_price']
        }
      }
  }
  increamentItem(id) {
      for (let i = 0; i < this.state.products.length; i++) {
        if (this.state.products[i]._id == id) {
          this.setState({
            
          })
          this.state.products[i]['quantity'] += 1
          console.log(this.state.products[i]['price']);
          this.state.total += this.state.products[i]['orignal_price']
          this.state.products[i]['price'] += this.state.products[i]['orignal_price']
        }
      }
  }
  paymentProceed(data) {
    console.log(data);
    
    const totalPrice = data;
    for (let i = 0; i < this.state.products.length; i++) {
        this.state.productIds.push(this.state.products[i]._id)    
        this.state.quantity.push(this.state.products[i].quantity)    
    }
    const params = {
      user_id: this.state.user_id,
      item_id: this.state.productIds.toString(),
      quantity: this.state.quantity.toString()
    }
    console.log(params);
    Api.cart(params).then(res => {
      if(res.status == "Ok"){
      this.refs.modal3.close()
  this.state.productIds = []
    this.state.quantity = []
    console.log(res)
      }else{
        this.refs.errModal.open()
        this.setState({
           errMsg: "looks like you are not connected to Internet..."
        })
      }
    }).catch(err =>  console.log(err))
  
    
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
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Icon
                name="restaurant-menu"
                type="material"
                color={'#382715'}
              />
            </TouchableOpacity>
          }
          rightComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Cart')}>
              <Icon
                name="shopping-cart"
                type="entypo"
                color={'#382715'}
              />
            </TouchableOpacity>
          }
        />
        <ScrollView>
          {/* <View
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
          {/* </View>  */}




        {this.state.products.map(products => (
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
            <View style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 10}}>
            <Icon name="cross" type="entypo" size={30} color="#382715" />
            </View>
            <View style={{ alignItems: 'center',}}>
            <Image source={{uri:base+products.picture  }} style={{ width: 200, height: 200 }} />
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
                <Icon name="left" type="antdesign" color="#FE4A00" size={30} iconStyle={{ marginTop: 1 }} onPress={() => this.decreamentItem(products._id)} />

                <Text style={{ color: "#FE4A00", fontSize: 18, fontWeight: "bold", marginLeft: 20, marginRight: 20 }}>{products.quantity}</Text>
                <Icon name="right" type="antdesign" color="#FE4A00" size={30} iconStyle={{ marginTop: 1, }} onPress={() => this.increamentItem(products._id)} />
            </View>

            <View style={{ padding: 10, backgroundColor: "#FE4A00", color: "#fff", alignSelf: "center", borderRadius: 10, marginTop: 10 }}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Rs {products.price}</Text>
            </View>
            </View>
            {/* )} */}
          </View>
        ))}
        
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

export default Cart;
