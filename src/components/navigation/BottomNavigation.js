import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeView from '../locations/home/HomeView';
import EquipmentView from '../locations/equipment/EquipmentView';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigation() {
  const HomeStack = createStackNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeView} />
      </HomeStack.Navigator>
    );
  }

  function EquipmentStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Equipment" component={EquipmentView} />
      </HomeStack.Navigator>
    );
  }

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Equipment"
        component={EquipmentStackScreen}
        options={{
          tabBarLabel: 'Equipment',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="wrench" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={EquipmentStackScreen}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="scanner" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={EquipmentStackScreen}
        options={{
          tabBarLabel: 'Analytics',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="poll-box" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
