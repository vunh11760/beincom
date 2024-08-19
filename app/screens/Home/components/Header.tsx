import {useNavigation} from '@react-navigation/core';
import color from 'app/assets/styles/color';
import {SCREEN_NAME} from 'app/constants/ScreenName';
import {NavigationTypes} from 'app/types/RootStackParamList';
import ImageUtil from 'app/utils/ImageUtil';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Header = () => {
  const navigation = useNavigation<NavigationTypes>();

  const goToSearch = () => {
    navigation.navigate(SCREEN_NAME.SEARCH);
  };
  return (
    <View
      style={{
        backgroundColor: color.white,
        borderBottomWidth: 1,
        paddingBottom: 5,
        borderBottomColor: color.neutral_3,
        flexDirection: 'row',
      }}>
      <View style={{flex: 1}}>
        <Image
          resizeMode="contain"
          style={{height: 20, width: 100}}
          source={ImageUtil.images.logo}
        />
      </View>
      <TouchableOpacity onPress={goToSearch}>
        <Image
          resizeMode="contain"
          style={{height: 20, width: 20, marginRight: 10}}
          source={ImageUtil.images.search}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
