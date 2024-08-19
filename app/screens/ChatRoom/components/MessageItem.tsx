import DecryptMessage from 'app/utils/DecryptMessage';
import React from 'react';
import {Text, View} from 'react-native';
type MessageItemProps = {
  msg: string;
};
const MessageItem = ({msg}: MessageItemProps) => {
  const decryptMessage = () => {
    return DecryptMessage.getInstance().decrypt(msg);
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <Text>{decryptMessage()}</Text>
    </View>
  );
};

export default MessageItem;
