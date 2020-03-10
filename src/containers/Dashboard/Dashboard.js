import React, {Component} from 'react';
import {Header,Card,Button,Icon} from 'react-native-elements';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './Dashboard.styles';
import Colors from './../../theme/Colors';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor="#fff"
          placement="center"
          leftComponent={{icon: 'menu', color: Colors.theme_color.orange}}
          // centerComponent={{ text: 'MY TITLE', style: { color: Colors.theme_color.orange, fontWeight: "bold" } }}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
        <ScrollView>
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
            <Card
  title='HELLO WORLD'
  // image={require('../images/pic2.jpg')}
  >
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
               <Card
  title='HELLO WORLD'
  // image={require('../images/pic2.jpg')}
  >
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
   <Card
  title='HELLO WORLD'
  // image={require('../images/pic2.jpg')}
  >
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
            </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

export default Dashboard;
