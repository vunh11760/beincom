import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Colors} from 'app/assets';
import {Image, StyleSheet} from 'react-native';
import ImageUtil from 'app/utils/ImageUtil';
import color from 'app/assets/styles/color';
import Home from 'app/screens/Home';
import Profile from 'app/screens/Profile';
import TabBar from './TabBar';
import Notification from 'app/screens/Notification';
import Chat from 'app/screens/Chat';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={TabBar}
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: color.white},
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarInactiveTintColor: '#394867',
        tabBarActiveTintColor: Colors.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={({route}) => {
          return {
            tabBarTestID: 'tab_best',
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  style={styles.tabIcon}
                  source={ImageUtil.images.home_active}
                />
              ) : (
                <Image
                  style={styles.tabIcon}
                  source={ImageUtil.images.home_inactive}
                />
              ),
          };
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={({route}) => {
          return {
            tabBarTestID: 'tab_best',
            tabBarLabel: 'Chat',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  style={styles.tabIcon}
                  source={ImageUtil.images.message_active}
                />
              ) : (
                <Image
                  style={styles.tabIcon}
                  source={ImageUtil.images.message_inactive}
                />
              ),
          };
        }}
      />
      <Tab.Screen
        name="NewPost"
        component={() => {
          return <></>;
        }}
        options={({route}) => {
          return {
            tabBarTestID: 'tab_new',
            tabBarLabel: 'New',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image style={styles.tabIcon} source={ImageUtil.images.plus} />
              ) : (
                <Image style={styles.tabIcon} source={ImageUtil.images.plus} />
              ),
          };
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={({route}) => {
          return {
            tabBarTestID: 'tab_top',
            tabBarLabel: 'Notification',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  style={styles.tabIcon}
                  source={ImageUtil.images.notification_active}
                />
              ) : (
                <Image
                  style={styles.tabIcon}
                  source={ImageUtil.images.notification_inactive}
                />
              ),
          };
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({route}) => {
          return {
            tabBarTestID: 'tab_top',
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  style={styles.tabIcon}
                  source={ImageUtil.images.profile_active}
                />
              ) : (
                <Image
                  style={styles.tabIcon}
                  source={ImageUtil.images.profile_inactive}
                />
              ),
          };
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
const styles = StyleSheet.create({
  tabIcon: {
    width: 20,
    height: 20,
  },
});
