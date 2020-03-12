import React from 'react';
import EquipmentInfoCard from './EquipmentInfoCard';
import ActionRequiredList from './ActionRequiredList';
import ComponentList from './ComponentList';
import {Text, View} from 'react-native';

export default function ComponentListView({route, navigation}) {
  return (
    <View>
      <EquipmentInfoCard equipmentId={route.params.equipmentId} />
      <ActionRequiredList
        equipmentId={route.params.equipmentId}
        navigation={navigation}
      />
      <ComponentList
        equipmentId={route.params.equipmentId}
        navigation={navigation}
      />
    </View>
  );
}
