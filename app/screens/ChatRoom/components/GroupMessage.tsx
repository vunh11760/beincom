import color from 'app/assets/styles/color';
import ImageUtil from 'app/utils/ImageUtil';
import React from 'react';
import {Text, View, Image} from 'react-native';
import {IGroupMessage} from 'app/types/GroupMessage';
import MessageItem from 'app/screens/ChatRoom/components/MessageItem';

type GroupMessageProps = {
  data: IGroupMessage;
};
const GroupMessage = ({data}: GroupMessageProps) => {
  if (data.auth === '1')
    return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          style={{width: 20, height: 20, marginRight: 5}}
          source={ImageUtil.images.profile_inactive}
        />
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: '600'}}>Vu Nguyen</Text>
            <Text style={{fontSize: 10, marginLeft: 5, color: color.neutral_3}}>
              10:10 pm
            </Text>
          </View>
          {data.msgs.map(item => {
            return <MessageItem msg={item} />;
          })}
        </View>
      </View>
    );
  else
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <View>
          {data.msgs.map(item => {
            return <MessageItem msg={item} />;
          })}
        </View>
      </View>
    );
};

export default GroupMessage;
