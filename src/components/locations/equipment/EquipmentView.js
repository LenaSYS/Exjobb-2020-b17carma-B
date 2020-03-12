import React from 'react';
import EquipmentList from './EquipmentList';
import {ScrollView} from 'react-native';

export default function EquipmentView({navigation}) {
  return (
    <ScrollView>
      <EquipmentList />
    </ScrollView>
  );
}
