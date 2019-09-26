import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import HomeScreen from './screens/Home';
import RegisterScreen from './screens/Register';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import NewNavigator from './screens/NewNavigator';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Register: { screen: RegisterScreen },
  NewNavigator: { screen: NewNavigator },
}, {
  initialRouteName: 'Home'
});

const AppWithNav = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      < AppWithNav />

    )
  }
}
