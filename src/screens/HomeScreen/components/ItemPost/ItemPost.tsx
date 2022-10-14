/* eslint-disable prettier/prettier */
import {BaseAmountHeart} from '@components';
import {IPhotoAPI} from '@services';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
interface IState {
  post: IPhotoAPI;
}

function ItemPost({post}: IState) {
  return (
    <View>
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1664575602807-e002fc20892c?ixid=MnwzNzE4NTR8MXwxfGFsbHwxfHx8fHx8Mnx8MTY2NTcyNzcyMQ&ixlib=rb-1.2.1',
          }}
          style={styles.image}
        />
        <BaseAmountHeart />
      </View>
      <Text>123</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 220,
  },
});

export default ItemPost;
