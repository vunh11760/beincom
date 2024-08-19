import BlogItem from 'app/components/BlogItem';
import LoadingItem from 'app/components/LoadingItem';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import Filter, {FilterHandle} from './components/Filter';
import Header from './components/Header';

const Home = (props: any) => {
  const onChangeFilter = (type: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const offset = useRef(0);
  const filterHandleRef = useRef<FilterHandle>();

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    if (currentOffset !== offset.current && currentOffset > 0) {
      let direction = currentOffset > offset.current ? 'down' : 'up';
      if (direction === 'down') {
        if (event.nativeEvent.contentOffset.y > offset.current + 50) {
          offset.current = event.nativeEvent.contentOffset.y;
          props.navigation.setParams({
            tabBarVisible: false,
          });
          if (!!filterHandleRef?.current) filterHandleRef.current?.hide();
        }
      } else {
        offset.current = event.nativeEvent.contentOffset.y;
        props.navigation.setParams({
          tabBarVisible: true,
        });
        if (!!filterHandleRef?.current) filterHandleRef.current?.show();
      }
    }
  };
  const renderItem = ({item, index}: any) => {
    console.log('index :>> ', index);
    return <BlogItem />;
  };
  return (
    // <ScrollView onScroll={onScroll}>
    //   <View style={{height: 10000}}></View>
    // </ScrollView>
    <>
      <Header />
      <Filter ref={filterHandleRef} onChangeFilter={onChangeFilter} />
      {isLoading ? (
        <>
          {Array.from({length: 10}).map(item => {
            return <LoadingItem />;
          })}
        </>
      ) : (
        <FlatList
          onScroll={onScroll}
          showsVerticalScrollIndicator={false}
          style={{flex: 1, paddingHorizontal: 10}}
          data={Array.from({length: 100})}
          renderItem={renderItem}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={50}
          // onEndReached={loadMore}
          onEndReachedThreshold={0.7}
          // ListEmptyComponent={EmptyComponent}
        />
      )}
    </>
  );
};

export default Home;
