import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './MainScreen';

const Stack = createStackNavigator();

function MenuIcon() {
  return (
    <View>
      <TouchableOpacity onPress={() => alert('Menu!')}>
      <Image style={styles.menuicon} 
        source={require('../../assets/images/menu-icon.png')}
      />
      </TouchableOpacity>
	  </View>
    
  );
}

class AppMainScreen extends Component {
  render () {
    return (
      <NavigationContainer independent={true}>
      <Stack.Navigator headerMode="screen"
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#b4151b' },
          }}>
          <Stack.Screen
            name="News App"
            component={MainScreen}
            options={({ navigation, route }) => ({
              headerLeft: props => <MenuIcon {...props} />,
              headerRight: () => (
                <View>
                  <TouchableOpacity onPress={() => alert('Search!')}>
                  <Image style={styles.searchicon}
                    source={require('../../assets/images/magnifying-glass.png')}
                  />
                  </TouchableOpacity>
                </View>
              ),
              headerTitleAlign:'center',
            })}
          />
        </Stack.Navigator>
        </NavigationContainer>
    );
  }
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

export default AppMainScreen;