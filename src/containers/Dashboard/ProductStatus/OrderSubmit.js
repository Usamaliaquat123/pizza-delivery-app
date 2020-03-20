import React, { Component, } from 'react'
import { Text, View,TouchableOpacity,Platform,ScrollView } from 'react-native'
import { Header,Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { setAllSubmitOrders } from './../../../actions';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from './../../../utils/constants';
import moment from 'moment';
import LottieView from 'lottie-react-native';
import jsons from './../../../theme/Json';
class OrderSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    componentDidMount() {
        this.props.setAllSubmitOrders()
    }
    render() {
        const { prevOrderSubmit } = this.props

        console.log(prevOrderSubmit);
    
        return (
          <>
           <Header
          containerStyle={{
            marginTop: Platform.OS === 'ios' ? 0 : -STATUS_BAR_HEIGHT,
          }}
          backgroundColor="#E5E5E5"
          placement="center"
          leftComponent={
            <TouchableOpacity  onPress={() => 
            {
               this.props.navigation.navigate('Dashboard')
              // this.props.navigation.state.params.updateDate('sd')
            //   this.props.navigation.state.params.onGoBack()              
            //   this.props.navigation.goBack()
              }}
              >
              <Icon
                name="restaurant-menu"
                type="material"
                color={'#382715'}
              />
            </TouchableOpacity>
          }
          centerComponent={{ text: 'Submited Orders', style: { color: '#372715', fontWeight: 'bold' } }}
         
        />

        <ScrollView>

         {prevOrderSubmit.length == 0 && (
          <View style={{ opacity: .5 }}>
           <LottieView
                autoPlay
                source={jsons.cart}
                style={{ alignSelf: 'center',
    width: 700,
    height: 700, }}
              />
              <Text style={{ alignSelf: 'center', color: '#372715',  marginTop: -300, fontWeight: 'bold', fontSize: 12}}>Please place your order...</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}><Text style={{ alignSelf: 'center', color: '#F54B00', marginTop: 5, fontWeight: 'bold', fontSize: 15}}>Shop Now!</Text></TouchableOpacity>
          </View>
        )}
        {prevOrderSubmit.map(prod => (

            <TouchableOpacity style={{paddingTop: 20, paddingBottom: 20,alignSelf: 'center', backgroundColor: "#E5E5E5",marginTop: 8, borderRadius: 15, width: SCREEN_WIDTH - 12 }}>
                    <View style={{ flexDirection : 'row' }}>
                         <Icon
                name="clipboard"
                type="entypo"
                size={60}
                color={'#AEAEAE'}
              />

              <Text></Text>
              <View>
              
              <View style={{  flexDirection : 'row', marginTop: 8, marginLeft: 5 }}>
              <Text style={{ fontSize: 13, fontWeight: 'bold',opacity: .5 }}>Your order has been placed on {moment(prod.time_stamp).format("MMM Do YY ") }at </Text>
              </View>
              <Text style={{fontSize: 13, fontWeight: 'bold',marginLeft: 5,opacity: .5}}>{moment(prod.time_stamp).format('h:mm a')}</Text>
              
              <View style={{ flexDirection: 'row' }}>
              
              <Text style={{ fontSize: 12, opacity: .3,fontWeight: 'bold',marginLeft: 5 }}>Quantity {prod.quantity} </Text>
              <Text style={{ fontSize: 12, opacity: .6,fontWeight: 'bold',marginLeft: 5, alignSelf: 'flex-end' }}>Rs:  {prod.total_price}</Text>
              <Text style={{fontSize: 12, opacity: .8,fontWeight: 'bold',marginLeft:20, alignSelf: 'flex-end'}}>Placed</Text>
              </View>
              </View>
                    </View>
            </TouchableOpacity>
        ))}

        </ScrollView>
          </>
        )
    }
}


// export default Dashboard
function mapStateToProps(state){
  return {
    prevOrderSubmit : state.prevOrders.prevOrderSubmit,
  }
}



export default connect(mapStateToProps, {
    setAllSubmitOrders
  })(OrderSubmit)


