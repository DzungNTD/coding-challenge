/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {photoApi} from '@api';
import {IPhotoAPI} from '@services';
import {theme} from '@theme';
import {BannerHome, ItemPost} from './components';
import {useScrollToTop} from '@react-navigation/native';

const ListFooterComponent = ({isLoadMore}: {isLoadMore: boolean}) => {
  return isLoadMore ? (
    <ActivityIndicator style={styles.activityIndicator} />
  ) : null;
};

function HomeScreen(props: any) {
  const [posts, setPosts] = useState<IPhotoAPI[]>([]);
  const [pageCurrent, setPageCurrent] = useState<number>(1);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const [banner, setBanner] = useState<IPhotoAPI>();
  const [refresh, setRefresh] = useState<boolean>(false);

  const focusRef = useRef<boolean>(false);
  const countRef = useRef<number>(0);
  const flatListRef = useRef<any>(null);
  const flatListOffset = useRef(0);

  useEffect(() => {
    getListPost();
  }, []);

  useEffect(() => {
    let timeout: number;
    if (refresh) {
      timeout = setTimeout(() => {
        getListPost();
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [refresh]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('tabPress', e => {
      e.preventDefault();
      if (countRef.current > 0) {
        focusRef.current = true;
      }
      countRef.current++;

      if (flatListRef.current && focusRef.current) {
        flatListRef.current.scrollToOffset({animated: true, offset: 0});
        if (flatListOffset.current === 0) {
          onRefresh();
        }
      }
    });
    return unsubscribe;
  }, [props.navigation]);

  const getListPost = async () => {
    try {
      setIsLoadMore(true);
      let param = {
        page: pageCurrent,
        per_page: 5,
      };
      const res: any = await photoApi.getByPage(param);
      setBanner(res[0]);

      if (res.length > 0) {
        if (pageCurrent === 1) {
          setPosts(res);
        } else {
          setPosts([...posts.concat(res)]);
        }

        setPageCurrent(pageCurrent + 1);
      }
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setIsLoadMore(false);
      setRefresh(false);
    }
  };

  const onRefresh = () => {
    setRefresh(true);
    setPageCurrent(1);
  };

  const handleEndReached = () => {
    if (isLoadMore) return;
    getListPost();
  };

  const keyExtractor = useCallback((_: IPhotoAPI) => {
    return String(_.id);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={posts}
        keyExtractor={keyExtractor}
        renderItem={({item}) => <ItemPost post={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<BannerHome post={banner} />}
        ListFooterComponent={<ListFooterComponent isLoadMore={isLoadMore} />}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0}
        onRefresh={onRefresh}
        refreshing={refresh}
        onScroll={event => {
          flatListOffset.current = event.nativeEvent.contentOffset.y;
        }}
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
