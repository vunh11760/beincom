import {useNavigation} from '@react-navigation/core';
import color from 'app/assets/styles/color';
import ImageUtil from 'app/utils/ImageUtil';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
type HeaderNavigatorProps = {
  title: string;
  showLeftButton?: boolean;
  RightButton?: () => React.ReactNode;
};
const HeaderNavigator = ({
  title,
  showLeftButton = true,
  RightButton,
}: HeaderNavigatorProps) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        backgroundColor: color.white,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {showLeftButton && (
        <TouchableOpacity onPress={goBack}>
          <Image
            resizeMode="contain"
            style={{height: 15, width: 15, marginRight: 10}}
            source={ImageUtil.images.ic_arrow_left}
          />
        </TouchableOpacity>
      )}

      <View style={{flex: 1}}>
        <Text style={{fontWeight: '600'}}>{title}</Text>
      </View>
      {RightButton && RightButton()}
    </View>
  );
};

export default HeaderNavigator;
