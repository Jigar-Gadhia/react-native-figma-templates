import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottomNavigationData} from '../../utils/bottomNavigationData';
import {screenNames} from '../../utils/screenNames';
import {scale, verticalScale} from 'react-native-size-matters';
import {LightColors} from '../../theme/colors';
import {useAppTheme} from '../../theme/ThemeContext';
import IconComponent from '../../components/IconComponent';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const {colors, mode} = useAppTheme();
  const barStyle = mode === 'dark' ? 'light-content' : 'dark-content';
  return (
    <React.Fragment>
      <StatusBar barStyle={barStyle} />
      <Tab.Navigator
        initialRouteName={screenNames.Home}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: verticalScale(90),
            borderTopLeftRadius: scale(70),
            borderTopRightRadius: scale(70),
            backgroundColor: colors.tab,
            paddingHorizontal: scale(25),
            paddingVertical: scale(20),
            position: 'absolute',
          },
        }}>
        {bottomNavigationData.map((item, index) => {
          const Component = item.component;

          return (
            <Tab.Screen
              key={index}
              name={item.name}
              component={Component}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      backgroundColor: focused
                        ? LightColors.caribbeanGreen
                        : undefined,
                      padding: scale(10),
                      borderRadius: scale(18),
                    }}>
                    <IconComponent
                      Icon={item.icon}
                      height={30}
                      width={30}
                      color={focused ? 'primary' : 'text'}
                    />
                  </View>
                ),
                tabBarShowLabel: false,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default BottomNavigation;
