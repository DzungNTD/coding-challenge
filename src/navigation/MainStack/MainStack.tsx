import React from 'react';
import {SCREEN} from '@constant/index';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import {MyTabBar} from './MyTabBar';
import SearchStack from './SearchStack';
import UploadStack from './UploadStack';
import UserStack from './UserStack';

const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name={SCREEN.HOME_STACK} component={HomeStack} />
      <Tab.Screen name={SCREEN.SEARCH_STACK} component={SearchStack} />
      <Tab.Screen name={SCREEN.UPLOAD_STACK} component={UploadStack} />
      <Tab.Screen name={SCREEN.USER_STACK} component={UserStack} />
    </Tab.Navigator>
  );
}

export default MainStack;
