/* eslint-disable prettier/prettier */
import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BannerHome, ItemPost} from './components';

function HomeScreen() {
  const keyExtractor = useCallback((_: any) => _.id, []);
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
  },
});

export default HomeScreen;
