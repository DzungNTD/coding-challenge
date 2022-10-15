/* eslint-disable prettier/prettier */
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, TouchableOpacity} from 'react-native';
import GetTabBarIcon from './GetTabBarIcon';
import {theme} from '@theme';
interface IState {
  props: BottomTabBarProps;
  route: any;
  index: number;
}
function TabBarItem({props, route, index}: IState) {
  const {state, descriptors, navigation} = props;
  const {options} = descriptors[route.key];
  const isFocused = state.index === index;
  const IconTabBar = GetTabBarIcon(route, isFocused);
  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({name: route.name, merge: true} as never);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.8}
      style={styles.container}>
      {IconTabBar}
      {/* <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 16,
    backgroundColor: theme.color.white,
  },
});

export default TabBarItem;
