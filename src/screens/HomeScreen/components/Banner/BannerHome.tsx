/* eslint-disable prettier/prettier */
import {BaseAmountHeart} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function BannerHome() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1664575602807-e002fc20892c?ixid=MnwzNzE4NTR8MXwxfGFsbHwxfHx8fHx8Mnx8MTY2NTcyNzcyMQ&ixlib=rb-1.2.1',
        }}
        style={styles.image}
      />
      <View style={styles.body}>
        <Text style={styles.titleText}>Photo of the day</Text>
        <Text style={styles.descriptionText}>
          Alley in Île de Gorée, Dakar, Senegal
        </Text>
        <BaseAmountHeart />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 280,
  },
  body: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  titleText: {
    color: theme.color.white,
    fontSize: theme.fontSize.font24,
    fontWeight: '600',
    lineHeight: 34,
    marginBottom: 8,
    // backgroundColor: 'red',
  },
  descriptionText: {
    color: theme.color.white,
    fontSize: theme.fontSize.font13,
    fontWeight: '400',
    lineHeight: 18,
    marginBottom: 8,
  },
});

export default BannerHome;
