import {createStackNavigator} from '@react-navigation/stack';
import AnalyticsView from '../locations/analytics/AnalyticsView';
import OverallAnalyticsView from '../locations/analytics/overall/OverallAnalyticsView';
import React from 'react';
import HistoryView from '../locations/analytics/history/HistoryView';
import EquipmentAnalyticsView from '../locations/analytics/equipment/EquipmentAnalyticsView';
import EquipmentView from '../locations/equipment/EquipmentView';
import ComponentInformationView from '../locations/equipment/componentlist/componentinformation/ComponentInformationView';
import SimulationView from '../locations/analytics/simulation/SimulationView';

const headerOptions = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#3f51b5',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function AnalyticsStackScreen() {
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
      <AnalyticsStack.Screen
        name="History"
        component={HistoryView}
        options={headerOptions}
      />
      <AnalyticsStack.Screen
        name="Equipment Analytics"
        component={EquipmentView}
        options={headerOptions}
      />
      <AnalyticsStack.Screen
        name="Equipment Analytics Item"
        component={EquipmentAnalyticsView}
        options={headerOptions}
      />
      <AnalyticsStack.Screen
        name="Component"
        component={ComponentInformationView}
        options={headerOptions}
      />
      <AnalyticsStack.Screen
        name="Simulation"
        component={SimulationView}
        options={headerOptions}
      />
    </AnalyticsStack.Navigator>
  );
}
