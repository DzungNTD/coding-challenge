import {Platform, StyleSheet} from 'react-native';

/* eslint-disable prettier/prettier */
export const theme = {
  color: {
    white: '#FFFFFF',
    black: '#000000',
    gray: '#4F4F4F',
    active: '#002BC5',
    disable: '#000',
  },
  fontSize: {
    font13: 13,
    font24: 24,
  },
  statusBarHeight: Platform.OS === 'ios' ? 44 : 56,
  global: StyleSheet.create({
    fullscreenCenter: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  }),
};
