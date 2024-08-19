import HeaderNavigator from 'app/components/HeaderNavigator';
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import Modal from 'react-native-modal';
import color from 'app/assets/styles/color';
import GroupMessage from './components/GroupMessage';
import Header from './components/Header';
import InputMessageItem from './components/InputMessageItem';
const ChatRoom = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const renderItem = ({item, index}: any) => {
    console.log('index :>> ', index);
    return (
      <GroupMessage
        data={
          index % 2 == 0
            ? {
                auth: '1',
                msgs: ['1', '2'],
                time: '10 10 pm',
              }
            : {
                auth: '2',
                msgs: ['3', '5'],
                time: '10 11 pm',
              }
        }
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <Header
        title={'Vu Nguyen'}
        onRightButtonClick={() => {
          setIsShowModal(true);
        }}
      />
      <FlatList
        inverted
        showsVerticalScrollIndicator={false}
        style={{flex: 1, paddingHorizontal: 10, marginBottom: 10}}
        data={Array.from({length: 5})}
        renderItem={renderItem}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        // onEndReached={loadMore}
        onEndReachedThreshold={0.7}
        // ListEmptyComponent={EmptyComponent}
      />
      <InputMessageItem />
      <Modal
        useNativeDriver={false}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
        isVisible={isShowModal}
        backdropOpacity={0.5}
        backdropTransitionOutTiming={0}
        propagateSwipe={true}
        onBackdropPress={() => {
          setIsShowModal(false);
        }}
        // onBackButtonPress={onHardwareBackPress}
        animationOut="slideOutDown"
        hideModalContentWhileAnimating={true}>
        <View
          style={{
            width: '100%',
            height: 100,
            backgroundColor: color.white,
            borderTopEndRadius: 10,
            borderTopLeftRadius: 10,
          }}></View>
      </Modal>
    </View>
  );
};

export default ChatRoom;
