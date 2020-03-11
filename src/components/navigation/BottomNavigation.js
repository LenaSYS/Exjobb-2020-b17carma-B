import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeView from '../locations/home/HomeView';
import EquipmentView from '../locations/equipment/EquipmentView';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Equipment"
        component={EquipmentView}
        options={{
          tabBarLabel: 'Equipment',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="wrench" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={EquipmentView}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="scanner" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={EquipmentView}
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
