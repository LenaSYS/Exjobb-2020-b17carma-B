import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeView from '../locations/home/HomeView';

export default function AppStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeView}
        options={{title: 'Home'}}
      />
    </Stack.Navigator>
  );
}
