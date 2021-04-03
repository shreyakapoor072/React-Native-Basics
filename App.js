/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import TodoList from './screens/TodoList';


const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      //headerStyle: { backgroundColor: '#333'}
    }
  },
  TodoList : {
    screen: TodoList
  }
}

const homeStack = createStackNavigator(screens, {
  // default color of all headers
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee'}
  }
});

export default createAppContainer(homeStack);