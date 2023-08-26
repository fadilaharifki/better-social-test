/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/feed';
import FeedIcon from '../../assets/svg/feed';
import ChatIcon from '../../assets/svg/chat';
import NewsIcon from '../../assets/svg/news';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNavigate = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 48,
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Feed Screen"
        component={FeedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <FeedIcon color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Chat Screen"
        component={FeedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <ChatIcon color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="News Screen"
        component={FeedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <NewsIcon color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile Screen"
        component={FeedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return (
              <Image
                style={{
                  borderRadius: 200,
                  width: 25,
                  height: 25,
                }}
                source={{
                  uri: 'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?5315ffb',
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigate;
