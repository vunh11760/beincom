import color from 'app/assets/styles/color';
import ImageUtil from 'app/utils/ImageUtil';
import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const InputMessageItem = () => {
  const [msg, setMsg] = useState('');
  return (
    <KeyboardAvoidingView
      style={{
        borderWidth: 1,
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        borderColor: color.neutral_3,
      }}
      keyboardVerticalOffset={20}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{padding: 10}}>
        <TextInput
          placeholder="Write a new message"
          onChangeText={text => {
            setMsg(text);
          }}
        />
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <View style={{flex: 1}}></View>
          <TouchableOpacity
            disabled={msg === ''}
            style={{
              backgroundColor: color.primary,
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 4,
              opacity: msg !== '' ? 1 : 0.5,
            }}>
            <Image
              style={{width: 15, height: 15}}
              source={ImageUtil.images.ic_send}
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default InputMessageItem;
