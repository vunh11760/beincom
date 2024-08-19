import {useNavigation} from '@react-navigation/core';
import color from 'app/assets/styles/color';
import {SCREEN_NAME} from 'app/constants/ScreenName';
import {NavigationTypes} from 'app/types/RootStackParamList';
import ImageUtil from 'app/utils/ImageUtil';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
type HeaderProps = {
  title: string;
  onRightButtonClick: () => void;
};
const Header = ({title, onRightButtonClick}: HeaderProps) => {
  const navigation = useNavigation<NavigationTypes>();
  const goBack = () => {
    navigation.goBack();
  };
  const goDirectMessageInfo = () => {
    navigation.navigate(SCREEN_NAME.DIRECT_MESSAGE_INFO);
  };
  return (
    <View
      style={{
        backgroundColor: color.white,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={goBack}>
        <Image
          resizeMode="contain"
          style={{height: 15, width: 15, marginRight: 10}}
          source={ImageUtil.images.ic_arrow_left}
        />
      </TouchableOpacity>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={goDirectMessageInfo}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: '600'}}>Vu Nguyen</Text>
          <Text style={{fontSize: 10, color: color.neutral_3}}>View info</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onRightButtonClick}>
        <Image
          resizeMode="contain"
          style={{height: 15, width: 15, marginRight: 10}}
          source={ImageUtil.images.more}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
