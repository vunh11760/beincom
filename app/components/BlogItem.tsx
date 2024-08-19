import {useNavigation} from '@react-navigation/core';
import {SCREEN_NAME} from 'app/constants/ScreenName';
import {NavigationTypes} from 'app/types/RootStackParamList';
import React from 'react';

import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const BlogItem = () => {
  const navigation = useNavigation<NavigationTypes>();

  const goBlogDetail = () => {
    navigation.navigate(SCREEN_NAME.BLOG_DETAIL);
  };
  return (
    <View style={{padding: 10, marginTop: 10}}>
      <TouchableOpacity onPress={goBlogDetail}>
        <Image
          resizeMode="cover"
          style={{height: 150, width: '100%'}}
          source={{
            uri: 'https://www.beincom.com/wp-content/uploads/2024/04/everyone-needs-a-place-to-be-in.webp',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BlogItem;
