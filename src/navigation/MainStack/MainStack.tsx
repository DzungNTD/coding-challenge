import {SvgImage, SvgSearch, SvgUpload, SvgUserCircle} from '@components';
import {SCREEN} from '@constant/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import UploadStack from './UploadStack';
import UserStack from './UserStack';

const Tab = createBottomTabNavigator();
enum COLOR {
  ACTIVE = '#002BC5',
  DISABLE = '#000',
}
function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon;
          if (route.name === SCREEN.HOME_STACK) {
            icon = focused ? (
              <SvgImage stroke={COLOR.ACTIVE} />
            ) : (
              <SvgImage stroke={COLOR.DISABLE} />
            );
          } else if (route.name === SCREEN.SEARCH_STACK) {
            icon = focused ? (
              <SvgSearch stroke={COLOR.ACTIVE} />
            ) : (
              <SvgSearch stroke={COLOR.DISABLE} />
            );
          } else if (route.name === SCREEN.UPLOAD_STACK) {
            icon = focused ? (
              <SvgUpload stroke={COLOR.ACTIVE} />
            ) : (
              <SvgUpload stroke={COLOR.DISABLE} />
            );
          } else if (route.name === SCREEN.USER_STACK) {
            icon = focused ? (
              <SvgUserCircle stroke={COLOR.ACTIVE} />
            ) : (
              <SvgUserCircle stroke={COLOR.DISABLE} />
            );
          }
          return icon;
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name={SCREEN.HOME_STACK} component={HomeStack} />
      <Tab.Screen name={SCREEN.SEARCH_STACK} component={SearchStack} />
      <Tab.Screen name={SCREEN.UPLOAD_STACK} component={UploadStack} />
      <Tab.Screen name={SCREEN.USER_STACK} component={UserStack} />
    </Tab.Navigator>
  );
}

export default MainStack;
