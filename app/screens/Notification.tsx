import HeaderNavigator from 'app/components/HeaderNavigator';
import ImageUtil from 'app/utils/ImageUtil';
import React from 'react';
import {Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Notification = () => {
  const onRightButtonClick = () => {};
  return (
    <>
      <HeaderNavigator
        title="Notification"
        showLeftButton={false}
        RightButton={() => {
          return (
            <TouchableOpacity onPress={onRightButtonClick}>
              <Image
                resizeMode="contain"
                style={{height: 15, width: 15, marginRight: 10}}
                source={ImageUtil.images.more}
              />
            </TouchableOpacity>
          );
        }}
      />
      <Text>Notification</Text>
    </>
  );
};

export default Notification;
