/* eslint-disable prettier/prettier */
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import TabBarItem from './TabBarItem';

function MyTabBar(props: BottomTabBarProps) {
  const {state} = props;
  return (
    <View style={styles.container}>
      {state.routes.map((route, index: number) => (
        <TabBarItem key={index} props={props} route={route} index={index} />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 76,
  },
});

export default MyTabBar;
