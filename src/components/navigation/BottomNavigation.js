import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeView from '../locations/home/HomeView';
import EquipmentView from '../locations/equipment/EquipmentView';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import AnalyticsView from '../locations/analytics/AnalyticsView';
import QrReaderView from '../locations/scan/QrReaderView';

const Tab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({
  bar: {backgroundColor: 'white'},
});

const headerOptions = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#3f51b5',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function BottomNavigation() {
  const HomeStack = createStackNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeView}
          options={headerOptions}
        />
      </HomeStack.Navigator>
    );
  }

  function EquipmentStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Equipment"
          component={EquipmentView}
          options={headerOptions}
        />
      </HomeStack.Navigator>
    );
  }

  function ScanStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Scan"
          component={QrReaderView}
          options={headerOptions}
        />
      </HomeStack.Navigator>
    );
  }

  function AnalyticsStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Analytics"
          component={AnalyticsView}
          options={headerOptions}
        />
      </HomeStack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={styles.bar}
      activeColor="#3f51b5">
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
        component={ScanStackScreen}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="scanner" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
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
