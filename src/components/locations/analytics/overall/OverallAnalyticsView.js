import React from 'react';
import {View} from 'react-native';
import OverallPieChart from './OverallPieChart';
import OverallCalendarChart from './OverallCalendarChart';

export default function OverallAnalyticsView() {
  return (
    <View>
      <OverallPieChart />
      <OverallCalendarChart />
    </View>
  );
}
