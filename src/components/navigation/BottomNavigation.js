import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeView from '../locations/home/HomeView';
import EquipmentView from '../locations/equipment/EquipmentView';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import AnalyticsView from '../locations/analytics/AnalyticsView';
import QrReaderView from '../locations/scan/QrReaderView';
import OverallAnalyticsView from '../locations/analytics/overall/OverallAnalyticsView';
import ComponentListView from '../locations/equipment/componentlist/ComponentListView';
import ComponentInformationView from '../locations/equipment/componentlist/componentinformation/ComponentInformationView';
import ScanResultView from '../locations/scan/result/ScanResultView';

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
  function HomeStackScreen() {
    const HomeStack = createStackNavigator();

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
    const EquipmentStack = createStackNavigator();

    return (
      <EquipmentStack.Navigator>
        <EquipmentStack.Screen
          name="Equipment"
          component={EquipmentView}
          options={headerOptions}
        />
        <EquipmentStack.Screen
          name="Equipment Item"
          component={ComponentListView}
          options={headerOptions}
        />
        <EquipmentStack.Screen
          name="Component"
          component={ComponentInformationView}
          options={headerOptions}
        />
      </EquipmentStack.Navigator>
    );
  }

  function ScanStackScreen() {
    const ScanStack = createStackNavigator();

    return (
      <ScanStack.Navigator>
        <ScanStack.Screen
          name="Scan"
          component={QrReaderView}
          options={headerOptions}
        />
        <ScanStack.Screen
          name="Result"
          component={ScanResultView}
          options={headerOptions}
        />
      </ScanStack.Navigator>
    );
  }

  function AnalyticsStackScreen() {
    const AnalyticsStack = createStackNavigator();

    return (
      <AnalyticsStack.Navigator>
        <AnalyticsStack.Screen
          name="Analytics"
          component={AnalyticsView}
          options={headerOptions}
        />
        <AnalyticsStack.Screen
          name="Overall"
          component={OverallAnalyticsView}
          options={headerOptions}
        />
      </AnalyticsStack.Navigator>
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
