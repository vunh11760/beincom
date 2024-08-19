import color from 'app/assets/styles/color';
import React, {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import {LayoutAnimation, Text, View, TouchableOpacity} from 'react-native';

const FILTER = [
  {
    type: '1',
    title: 'All',
  },
  {
    type: '2',
    title: 'Important',
  },
  {
    type: '3',
    title: 'Saved',
  },
];
export type FilterHandle = {
  hide: () => void;
  show: () => void;
};
type FilterProps = {
  onChangeFilter: (type: string) => void;
};
const Filter = (
  {onChangeFilter}: FilterProps,
  ref: ForwardedRef<FilterHandle | undefined>,
) => {
  useImperativeHandle(ref, () => ({
    hide,
    show,
  }));
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState<string>('1');
  const hide = () => {
    LayoutAnimation.configureNext({
      duration: 500,
      create: {type: 'linear', property: 'opacity'},
      update: {type: 'spring', springDamping: 0.5},
      delete: {type: 'linear', property: 'opacity'},
    });
    setVisible(false);
  };

  const show = () => {
    LayoutAnimation.configureNext({
      duration: 500,
      create: {type: 'linear', property: 'opacity'},
      update: {type: 'spring', springDamping: 0.5},
      delete: {type: 'linear', property: 'opacity'},
    });
    setVisible(true);
  };
  if (visible)
    return (
      <View
        style={{
          backgroundColor: color.white,
          paddingHorizontal: 10,
          flexDirection: 'row',
          paddingTop: 2,
        }}>
        {FILTER.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                setCurrent(item.type);
                onChangeFilter(item.type);
              }}
              style={{
                borderBottomColor: color.primary,
                borderBottomWidth: item.type === current ? 2 : 0,
                paddingHorizontal: 10,
                paddingBottom: 4,
              }}>
              <Text
                style={{
                  color: item.type === current ? color.primary : color.black,
                  fontWeight: item.type === current ? '500' : '500',
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  return null;
};

export default forwardRef(Filter);
