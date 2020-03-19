import {ScrollView} from 'react-native';
import React from 'react';
import EquipmentAnalyticsList from './EquipmentAnalyticsList';

export default function EquipmentAnalyticsListView({navigation}) {
  return (
    <ScrollView>
      <EquipmentAnalyticsList navigation={navigation} />
    </ScrollView>
  );
}
