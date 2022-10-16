/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {BaseAmountLike} from '@components';
import {IPhotoAPI} from '@services';
import {theme} from '@theme';
interface IState {
  post: IPhotoAPI | undefined;
}
function BannerHome({post}: IState) {
  return (
    <View style={styles.container}>
      <Image source={{uri: post?.urls.small}} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.titleText}>
          {post?.description || 'Description'}
        </Text>
        <Text style={styles.descriptionText}>
          {post?.alt_description || 'Alt description'}
        </Text>
        <BaseAmountLike amount={post?.likes} />
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
