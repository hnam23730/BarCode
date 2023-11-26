import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet } from 'react-native';
import Scan from './screen/Scan';
import Card from './screen/Card';
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";

const BottomBar = () => {
    const Tab = createBottomTabNavigator();
    return (
    <Tab.Navigator  screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarLabel: () => null,
      }}>
      <Tab.Screen
        name="Bắt Đầu"
        component={Scan}
        options={{
            headerShown: false,
            tabBarIcon: ({ color}) => (
                <Icon2 name="home" size={30} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="note"
        component={Scan}
        options={{
            headerShown: false,
            tabBarIcon: ({ color}) => (
                <Icon name="bell-o" size={30} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
            headerShown: false,
            tabBarIcon: ({ color}) => (
                <Icon3 name="line-scan" size={30} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="history"
        component={Scan}
        options={{
            headerShown: false,
            tabBarIcon: ({ color}) => (
                <Icon name="history" size={30} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Giỏ"
        component={Card}
        options={{
            headerShown: false,
            tabBarIcon: ({ color}) => (
                <Icon2 name="shopping-cart" size={30} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
    );
};
const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: 'white',
      borderCurve: 'circular',
      borderTopLeftRadius: 20,
     borderTopRightRadius: 20,
     height: 80, 
     justifyContent: 'center', 
     alignItems: 'center', 
    },
  });
export default BottomBar;