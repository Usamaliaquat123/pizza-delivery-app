import React, { Component, } from 'react'
import { Text, View,TouchableOpacity,Platform,ScrollView } from 'react-native'
import { Header,Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { setAllSubmitOrders } from './../../../actions';
import { STATUS_BAR_HEIGHT } from './../../../utils/constants';

class OrderSubmit extends Component {
    constructor(props) {
        super(props)
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
            <TouchableOpacity onPress={() => 
            {
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


