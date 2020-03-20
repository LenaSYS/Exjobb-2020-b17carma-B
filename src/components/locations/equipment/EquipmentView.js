import React from 'react';
import EquipmentList from './EquipmentList';
import {ScrollView} from 'react-native';

export default function EquipmentView({route, navigation}) {
  return (
    <ScrollView>
      <EquipmentList route={route} navigation={navigation} />
    </ScrollView>
  );
}
