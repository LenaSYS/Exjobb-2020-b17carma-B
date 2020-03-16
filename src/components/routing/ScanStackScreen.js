import {createStackNavigator} from '@react-navigation/stack';
import QrReaderView from '../locations/scan/QrReaderView';
import ScanResultView from '../locations/scan/result/ScanResultView';
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

export default function ScanStackScreen() {
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
