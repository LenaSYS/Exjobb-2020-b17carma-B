import {createStackNavigator} from '@react-navigation/stack';
import EquipmentView from '../locations/equipment/EquipmentView';
import ComponentListView from '../locations/equipment/componentlist/ComponentListView';
import ComponentInformationView from '../locations/equipment/componentlist/componentinformation/ComponentInformationView';
import React from 'react';
import {StyleSheet} from 'react-native';

const headerOptions = StyleSheet.create({
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#3f51b5',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

export default function EquipmentStackScreen() {
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
