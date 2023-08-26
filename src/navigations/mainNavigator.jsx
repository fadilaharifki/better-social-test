import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigate from './bottomNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigate"
          options={{headerShown: false}}
          component={BottomNavigate}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
