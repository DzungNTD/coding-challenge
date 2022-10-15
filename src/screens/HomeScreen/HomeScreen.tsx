/* eslint-disable prettier/prettier */
import {photoApi} from '@api';
import {theme} from '@theme';
import React, {useCallback, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BannerHome, ItemPost} from './components';

function HomeScreen() {
  const keyExtractor = useCallback((_: any) => _.id, []);
  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      const data: any = await photoApi.getByPage({page: 1});
      console.log('data: ', data);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={Array(10).fill('')}
        keyExtractor={keyExtractor}
        renderItem={({item}) => <ItemPost post={item} />}
        ListHeaderComponent={<BannerHome />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.white,
  },
});

export default HomeScreen;
