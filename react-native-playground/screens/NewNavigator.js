import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Page1 from './Page1';
import Page2 from './Page2';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'

const MainNavigator = createBottomTabNavigator({
    Page1: Page1,
    Page2: Page2,
});

const AppWithNav = createAppContainer(MainNavigator);

export default AppWithNav;
