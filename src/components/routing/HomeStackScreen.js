import {createStackNavigator} from '@react-navigation/stack';
import HomeView from '../locations/home/HomeView';
import React from 'react';
import ComponentInformationView from '../locations/equipment/componentlist/componentinformation/ComponentInformationView';

const headerOptions = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#3f51b5',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function HomeStackScreen() {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeView}
        options={headerOptions}
      />
      <HomeStack.Screen
        name="Component"
        component={ComponentInformationView}
        options={headerOptions}
      />
    </HomeStack.Navigator>
  );
}
