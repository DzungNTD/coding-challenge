/* eslint-disable prettier/prettier */
import {SvgHeart} from '@components/Icon';
import {theme} from '@theme';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AmountHeartProps} from './AmountHeartModel';

function BaseAmountHeart({style}: AmountHeartProps) {
  return (
    <View style={[styles.container, style]}>
      <SvgHeart />
      <Text style={styles.text}>160</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.color.white,
    fontSize: theme.fontSize.font13,
    fontWeight: '600',
    lineHeight: 18,
    marginLeft: 4,
    alignSelf: 'center',
  },
});
export default BaseAmountHeart;
