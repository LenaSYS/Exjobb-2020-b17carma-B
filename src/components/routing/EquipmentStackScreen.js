import {createStackNavigator} from '@react-navigation/stack';
import EquipmentView from '../locations/equipment/EquipmentView';
import ComponentListView from '../locations/equipment/componentlist/ComponentListView';
import ComponentInformationView from '../locations/equipment/componentlist/componentinformation/ComponentInformationView';
import React from 'react';

const headerOptions = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#3f51b5',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function EquipmentStackScreen() {
  const EquipmentStack = createStackNavigator();

  return (
    <EquipmentStack.Navigator initialRouteName="Equipment List">
      <EquipmentStack.Screen
        name="Equipment List"
        component={EquipmentView}
        options={headerOptions}
        initialParams={{type: 0}}
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
