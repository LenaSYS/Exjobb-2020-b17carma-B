import React from 'react';
import {ScrollView, View} from 'react-native';
import OverallPieChart from './OverallPieChart';
import OverallCalendarChart from './OverallCalendarChart';
import ContainedOverlineText from '../../../util/ContainedOverlineText';

export default function OverallAnalyticsView() {
  return (
    <ScrollView>
      <ContainedOverlineText text="Total Scans" />
      <OverallPieChart />
      <ContainedOverlineText text="Scan History" />
      <OverallCalendarChart />
    </ScrollView>
  );
}
