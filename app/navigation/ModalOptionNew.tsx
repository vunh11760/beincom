import color from 'app/assets/styles/color';
import React, {
  ForwardedRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {DeviceEventEmitter, Text, View} from 'react-native';
import Modal from 'react-native-modal';
export type ModalOptionNewHandle = {
  hide: () => void;
  show: () => void;
};

const ModalOptionNew = (props: any) => {
  useEffect(() => {
    const syncProfileEvent = DeviceEventEmitter.addListener('NewPost', () => {
      show();
    });
    return () => {
      syncProfileEvent.remove();
    };
  }, []);
  const [isShowModal, setIsShowModal] = useState(false);
  const hide = () => {
    setIsShowModal(false);
  };

  const show = () => {
    setIsShowModal(true);
  };
  const LIST_TYPE = ['Write Post', 'Write Article', 'Write Series'];
  return (
    <>
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
            backgroundColor: color.white,
            borderTopEndRadius: 10,
            borderTopLeftRadius: 10,
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderBottomColor: color.neutral_3,
            }}>
            {LIST_TYPE.map(item => {
              return <Text style={{marginTop: 5}}>{item}</Text>;
            })}
          </View>
          <View
            style={{
              paddingHorizontal: 10,
            }}>
            <Text style={{marginTop: 5}}>My Draff</Text>
          </View>
          <View style={{height: 50}}></View>
        </View>
      </Modal>
    </>
  );
};

export default ModalOptionNew;
