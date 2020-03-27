import React from 'react';
import ScanOverviewList from './ScanOverviewList';
import moment from 'moment';
import {SafeAreaView} from 'react-native';
import ContainedOverlineText from '../../util/ContainedOverlineText';

export default function HomeView({navigation}) {
  return (
    <SafeAreaView>
      <ContainedOverlineText text="Weekly Overview" />
      <ScanOverviewList
        navigation={navigation}
        startDate={moment().startOf('isoWeek')}
        endDate={moment().endOf('isoWeek')}
        type={0}
      />
    </SafeAreaView>
  );
}
