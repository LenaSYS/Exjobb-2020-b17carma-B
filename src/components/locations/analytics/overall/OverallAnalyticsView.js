import React from 'react';
import {View} from 'react-native';
import OverallPieChart from './OverallPieChart';
import OverallCalendarChart from './OverallCalendarChart';
import ContainedOverlineText from '../../../util/ContainedOverlineText';

export default function OverallAnalyticsView() {
  return (
    <View>
      <ContainedOverlineText text="Total Scans" />
      <OverallPieChart />
      <ContainedOverlineText text="Scan History" />
      <OverallCalendarChart />
    </View>
  );
}
