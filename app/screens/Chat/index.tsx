import React from 'react';
import {FlatList, TextInput, View} from 'react-native';
import ChatItem from './components/ChatItem';

const Chat = () => {
  const renderItem = ({item, index}: any) => {
    return <ChatItem />;
  };
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{flex: 1, paddingHorizontal: 10}}
        data={Array.from({length: 50})}
        renderItem={renderItem}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        // onEndReached={loadMore}
        onEndReachedThreshold={0.7}
        // ListEmptyComponent={EmptyComponent}
      />
    </>
  );
};

export default Chat;
