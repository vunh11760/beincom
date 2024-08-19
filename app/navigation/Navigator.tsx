import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {SCREEN_NAME} from 'app/constants/ScreenName';
import BlogDetail from 'app/screens/BlogDetail';
import ChatRoom from 'app/screens/ChatRoom';
import DirectMessageInfo from 'app/screens/DirectMessageInfo';
import Search from 'app/screens/Search';

import {RootStackParamList} from 'app/types/RootStackParamList';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();
const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.HOME}
      screenOptions={
        {
          // ...TransitionPresets.SlideFromRightIOS,
          //@ts-ignore
          // header: NavigationHeaderContainer,
        }
      }>
      <Stack.Group
        screenOptions={{
          presentation: 'card',
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen
          name={SCREEN_NAME.HOME}
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.CHAT_ROOM}
          component={ChatRoom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.SEARCH}
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.BLOG_DETAIL}
          component={BlogDetail}
          options={{headerShown: false}}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name={SCREEN_NAME.DIRECT_MESSAGE_INFO}
          component={DirectMessageInfo}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default Navigator;
