import React from 'react';
import EquipmentList from './EquipmentList';
import {SafeAreaView, ScrollView, View} from 'react-native';

export default function EquipmentView({navigation}) {
  return (
    <ScrollView>
      <EquipmentList />
    </ScrollView>
  );
}
