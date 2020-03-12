import React from 'react';
import ScanOverviewList from './ScanOverviewList';
import moment from 'moment';

export default function HomeView({navigation}) {
  return (
    <ScanOverviewList
      startDate={moment().startOf('isoWeek')}
      endDate={moment().endOf('isoWeek')}
    />
  );
}
