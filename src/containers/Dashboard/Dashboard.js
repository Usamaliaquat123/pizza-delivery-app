import React, {Component} from 'react';
import {Header, Card, Button, Icon} from 'react-native-elements';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import {styles} from './Dashboard.styles';
import {Colors, Img} from './../../theme';
// import {Img, jsons} from './../../../theme';
import LinearGradient from 'react-native-linear-gradient';
import {SCREEN_WIDTH} from './../../utils/constants';




// import { mysql } from "mysql";




class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  // const sql_conn = mysql.createConnection({
  //   host : 'localhost',
  //   user : 'Softcob_pizza',
  //   password: 'Frequency',
  //   database: 'softcob_pizza'
  // }).then(res => {
  //   console.log(res),
  // })

  }
  
  render() {
    return (
      <View>
        <Header
          backgroundColor="#fff"
          placement="center"
          leftComponent={{icon: 'menu', color: Colors.theme_color.orange}}
          // centerComponent={{ text: 'MY TITLE', style: { color: Colors.theme_color.orange, fontWeight: "bold" } }}
          rightComponent={{icon: 'shopping-cart', color: Colors.theme_color.orange}}
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
              <View style={{margin: 5}}>
                <LinearGradient
                  colors={['#FE4A00', '#FD6F00', '#FC8C00']}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 0}}
                  // start={{ x: 0.7, y: 1.2 }} end={{ x: 0.0, y: 0.7 }}
                  style={{
                    height: 215,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    width: 150,
                    borderRadius: 18,
                  }}>
                  <View style={{marginTop: -15, marginRight: 15}}>
                    <TouchableOpacity onPress={() => this.setState({ addCart: true })}>
                    <Icon
                      name="shopping-cart"
                      type="font-awesome"
                      color="#fff"
                    />
                    </TouchableOpacity>
                  </View>
                  <Image source={Img.dish} />
                </LinearGradient>
              </View>
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
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <View style={{margin: 5}}>
                  <LinearGradient
                    colors={['#E5E5E5', '#E5E5E5', '#E5E5E5']}
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 0}}
                    style={{
                      height: 215,
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 150,
                      // borderRadius: 18,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          backgroundColor: '#FE4A00',
                          padding: 5,
                          width: 60,
                          marginLeft: 35,
                          marginTop: -18,
                          marginBottom: 15,
                          borderRadius: 4,
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: '#fff',
                          }}>
                          New
                        </Text>
                      </View>
                      <View style={{marginTop: -25, marginLeft: 18}}>
                        <Icon
                          name="shoppingcart"
                          type="antdesign"
                          color="#FC8C00"
                        />
                      </View>
                    </View>
                    <Image
                      source={Img.dish}
                      style={{alignSelf: 'center', resizeMode: 'contain'}}
                    />
                  </LinearGradient>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Dashboard;
