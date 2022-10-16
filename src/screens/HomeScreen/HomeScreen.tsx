/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {photoApi} from '@api';
import {IPhotoAPI} from '@services';
import {theme} from '@theme';
import {BannerHome, ItemPost} from './components';

const ListFooterComponent = ({isLoadMore}: {isLoadMore: boolean}) => {
  return isLoadMore ? (
    <ActivityIndicator style={styles.activityIndicator} />
  ) : null;
};

function HomeScreen() {
  const [posts, setPosts] = useState<IPhotoAPI[]>([]);
  const [pageCurrent, setPageCurrent] = useState<number>(1);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const [banner, setBanner] = useState<IPhotoAPI>();
  useEffect(() => {
    getListPost();
  }, []);

  const getListPost = async () => {
    try {
      setIsLoadMore(true);
      let param = {
        page: pageCurrent,
      };
      const res: any = await photoApi.getByPage(param);
      if (res.length > 0) {
        if (pageCurrent === 1) {
          setBanner(res[0]);
        }
        setPosts([...posts.concat(res)]);
        setPageCurrent(pageCurrent + 1);
      }
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setIsLoadMore(false);
    }
  };

  const handleEndReached = () => {
    getListPost();
  };

  const keyExtractor = useCallback((_: IPhotoAPI) => _.id, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={keyExtractor}
        renderItem={({item}) => <ItemPost post={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<BannerHome post={banner} />}
        ListFooterComponent={<ListFooterComponent isLoadMore={isLoadMore} />}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.white,
  },
  activityIndicator: {
    marginTop: 40,
  },
});

export default HomeScreen;
