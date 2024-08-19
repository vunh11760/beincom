import {useNavigation} from '@react-navigation/core';
import color from 'app/assets/styles/color';
import {SCREEN_NAME} from 'app/constants/ScreenName';
import {NavigationTypes} from 'app/types/RootStackParamList';
import ImageUtil from 'app/utils/ImageUtil';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const ChatItem = () => {
  const navigation = useNavigation<NavigationTypes>();
  const goToChatRoom = () => {
    navigation.navigate(SCREEN_NAME.CHAT_ROOM);
  };
  return (
    <TouchableOpacity
      onPress={goToChatRoom}
      style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
      <Image
        style={{width: 50, height: 50, marginRight: 5}}
        source={ImageUtil.images.profile_inactive}
      />
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontWeight: '600'}}>Vu Nguyen</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>Last messsage</Text>
          <Text style={{fontSize: 10, marginLeft: 5, color: color.neutral_3}}>
            10:10 pm
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;
