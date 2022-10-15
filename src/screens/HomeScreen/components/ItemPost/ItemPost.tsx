/* eslint-disable prettier/prettier */
import {BaseAmountLike} from '@components';
import {IPhotoAPI} from '@services';
import {theme} from '@theme';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
interface IState {
  post: IPhotoAPI;
}

function ItemPost({}: IState) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1664575602807-e002fc20892c?ixid=MnwzNzE4NTR8MXwxfGFsbHwxfHx8fHx8Mnx8MTY2NTcyNzcyMQ&ixlib=rb-1.2.1',
          }}
          style={styles.image}
        />
        <BaseAmountLike style={styles.viewLike} />
      </View>
      <Text style={styles.textTitle}>
        Panoramic view of garibaldi lake with blue sky, white clouds, blue water
      </Text>
      <Text style={styles.textDescription}>
        Panoramic view of garibaldi lake with blue sky, white clouds, blue water
        and snow mountain. BC, Canada.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
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
