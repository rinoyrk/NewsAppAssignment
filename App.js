import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import AppMainScreen from './components/screens/AppMainScreen';

const Tab = createBottomTabNavigator();



export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
      initialRouteName="AppMainScreen"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="AppMainScreen"
        component={AppMainScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="screen2"
        component={AppMainScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./assets/images/newspaper.png')} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="screen3"
        component={AppMainScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./assets/images/clipboard.png')} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="screen4"
        component={AppMainScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./assets/images/group-5.png')} color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#b4151b',
  },
  menuicon: {
    marginLeft: 15
  },
  searchicon: {
    marginRight: 15
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsapp: {
    width: 255,
    height: 39,
    fontFamily: 'Roboto',
    fontSize: 26,
    fontWeight: "900",
    fontStyle: 'normal',
    letterSpacing: 0.29,
    textAlign: 'center',
    color: '#ffffff'
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  }
});
