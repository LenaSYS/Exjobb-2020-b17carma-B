import React from 'react';
import MonthOverviewList from './MonthOverviewList';
import moment from 'moment';

export default function HomeView({navigation}) {
  return (
    <MonthOverviewList
      startDate={moment().startOf('isoWeek')}
      endDate={moment().endOf('isoWeek')}
    />
  );
}
