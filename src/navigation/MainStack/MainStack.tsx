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
import {theme} from '@theme';
import {HomeScreen, SearchScreen, UploadScreen, UserScreen} from '@screens';

const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        marginTop: theme.statusBarHeight,
      }}
      tabBar={(props: BottomTabBarProps) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name={SCREEN.HOME_STACK} component={HomeScreen} />
      <Tab.Screen
        name={SCREEN.SEARCH_STACK}
        component={SearchScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
          },
        })}
      />
      <Tab.Screen
        name={SCREEN.UPLOAD_STACK}
        component={UploadScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
          },
        })}
      />
      <Tab.Screen
        name={SCREEN.USER_STACK}
        component={UserScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
          },
        })}
      />
    </Tab.Navigator>
  );
}

export default MainStack;
