import  React  from "react";
import { TouchableOpacity, View, Text } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationActions,withNavigation} from 'react-navigation';
class Logout extends React.Component{
    render(){
        return  <View style={{ marginTop: 10}}>
                  <TouchableOpacity onPress={() => {
                    AsyncStorage.removeItem('phone')
                    AsyncStorage.removeItem('userId')

                      this.props.navigation.reset(
            [NavigationActions.navigate({routeName: 'Login'})], 
            0,
          );
                  }} style={{ backgroundColor: "#F54B00", padding: 10, borderRadius: 10 }}><Text style={{ color: "#fff", fontSize: 12, fontWeight:"bold" }}>Logout</Text></TouchableOpacity>
                
                </View>
    }
}

export default withNavigation(Logout)