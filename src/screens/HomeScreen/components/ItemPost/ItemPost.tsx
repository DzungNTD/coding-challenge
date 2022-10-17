/* eslint-disable prettier/prettier */
import {BaseAmountLike} from '@components';
import {IPhotoAPI} from '@services';
import {theme} from '@theme';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
interface IState {
  post: IPhotoAPI;
}

function ItemPost({post}: IState) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: post.urls.small}} style={styles.image} />
        <BaseAmountLike style={styles.viewLike} amount={post.likes} />
      </View>
      <Text numberOfLines={1} style={styles.textTitle}>
        {post.description || 'Description'}
      </Text>
      <Text numberOfLines={3} style={styles.textDescription}>
        {post.alt_description || 'alt_description'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
    // backgroundColor: theme.color.white,
  },
  image: {
    width: '100%',
    height: 220,
  },
  viewLike: {
    position: 'absolute',
    left: 8,
    bottom: 8,
  },
  textTitle: {
    color: theme.color.black,
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 24,
    marginVertical: 8,
  },
  textDescription: {
    color: theme.color.gray,
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 18,
  },
});

export default ItemPost;
