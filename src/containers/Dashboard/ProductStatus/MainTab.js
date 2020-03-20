import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { Icon } from "react-native-elements";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {createBottomTabNavigator, TabBarBottom} from 'react-navigation-tabs';
import OrderSubmit from "./OrderSubmit";
import OrderProcessing from "./OrderProcessing";
import OrderCompleted from "./OrderCompleted";
import OrderRejected from "./OrderRejected";

export default createBottomTabNavigator(
    {
        OrderSubmit: {
            screen: OrderSubmit,
            navigationOptions: {
         tabBarIcon: ({focused, tintColor}) => {
         return (
            <Icon
              type="entypo"
              size={20}
              name={'500px-with-circle'}
              color={tintColor}
            />
          );
        },
            }
        },
        OrderProcessing: {
            screen: OrderProcessing,
            navigationOptions: {
         tabBarIcon: ({focused, tintColor}) => {
         return (
             <Icon
              type="antdesign"
              size={20}
              name={'swap'}
              color={tintColor}
            />
          );
        },
            }
        },
        OrderCompleted: {
            screen: OrderCompleted,
            navigationOptions: {
         tabBarIcon: ({focused, tintColor}) => {
         return (
            <Icon
              type="antdesign"
              size={20}
              name={'check'}
              color={tintColor}
            />
          );
        },
            }
        },
        OrderRejected: {
            screen: OrderRejected,
            navigationOptions: {
         tabBarIcon: ({focused, tintColor}) => {
         return (
            <Icon
              type="antdesign"
              size={20}
              name={'minuscircle'}
              color={tintColor}
            />
          );
        },
            }
        }
    },{
        initialRouteName : 'OrderSubmit',
        tabBarOptions: {
      showLabel: false,
      activeTintColor: '#F54B00',
    //   inactiveTintColor: Colors.textColor,
      style: {
        backgroundColor: 'transparent',
        borderRadius: 20
        // boreder
      },
    },
      tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
// animationEnabled: true,
    // animationEnabled: true,
    // swipeEnabled: true,
    }
)
