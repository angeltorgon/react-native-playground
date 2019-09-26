import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Page1 from './Page1';
import Page2 from './Page2';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

const MainNavigator = createStackNavigator({
    Page1: { screen: Page1 },
    Page2: { screen: Page2 },
});

const AppWithNav = createAppContainer(MainNavigator);

export default AppWithNav;
