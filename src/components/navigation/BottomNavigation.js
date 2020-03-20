import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';
import AnalyticsStackScreen from '../routing/AnalyticsStackScreen';
import EquipmentStackScreen from '../routing/EquipmentStackScreen';
import ScanStackScreen from '../routing/ScanStackScreen';
import HomeStackScreen from '../routing/HomeStackScreen';

const Tab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({
  bar: {backgroundColor: 'white'},
});

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={styles.bar}
      activeColor="#3f51b5">
      <Tab.Screen
        name="HomeTab"
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
        name="EquipmentTab"
        component={EquipmentStackScreen}
        options={{
          tabBarLabel: 'Equipment',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="wrench" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ScanTab"
        component={ScanStackScreen}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="scanner" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AnalyticsTab"
        component={AnalyticsStackScreen}
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
