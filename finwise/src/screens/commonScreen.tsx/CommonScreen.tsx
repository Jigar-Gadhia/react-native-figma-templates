import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {screenNames} from '../../utils/screenNames';
import NotificationsScreen from './NotificationsScreen';

const CommonScreen: React.FC = () => {
  const Screen = createNativeStackNavigator();
  return (
    <Screen.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={screenNames.NotificationsScreen}>
      <Screen.Screen
        name={screenNames.NotificationsScreen}
        component={NotificationsScreen}
      />
    </Screen.Navigator>
  );
};

export default CommonScreen;
