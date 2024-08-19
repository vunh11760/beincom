import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import color from 'app/assets/styles/color';
import React from 'react';
import {
  DeviceEventEmitter,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ModalOptionNew from './ModalOptionNew';

const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  LayoutAnimation.configureNext({
    duration: 500,
    create: {type: 'linear', property: 'opacity'},
    update: {type: 'spring', springDamping: 0.5},
    delete: {type: 'linear', property: 'opacity'},
  });

  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: color.neutral_3,
        bottom: state.routes[0]?.params?.tabBarVisible !== false ? 0 : -100,
        height: state.routes[0]?.params?.tabBarVisible !== false ? 40 : 0,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const tabBarIcon = options.tabBarIcon;
        const isFocused = state.index === index;

        const onPress = () => {
          if (route.key.indexOf('NewPost') > -1)
            DeviceEventEmitter.emit('NewPost');
          else {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {tabBarIcon?.({
              focused: isFocused,
              color: '',
              size: 20,
            })}
            {/* <Text
              style={{
                color: isFocused ? '#673ab7' : '#222',
                fontSize: 10,
                marginTop: 5,
              }}>
              {label || ''}
            </Text> */}
          </TouchableOpacity>
        );
      })}
      <ModalOptionNew />
    </View>
  );
};

export default TabBar;
const styles = StyleSheet.create({
  container: {
    height: 80,
  },
});
