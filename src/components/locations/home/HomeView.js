import React from 'react';
import ScanOverviewList from './ScanOverviewList';
import moment from 'moment';
import {SafeAreaView} from 'react-native';

export default function HomeView({navigation}) {
  return (
    <SafeAreaView>
      <ScanOverviewList
        navigation={navigation}
        startDate={moment().startOf('isoWeek')}
        endDate={moment().endOf('isoWeek')}
        type={0}
      />
    </SafeAreaView>
  );
}
