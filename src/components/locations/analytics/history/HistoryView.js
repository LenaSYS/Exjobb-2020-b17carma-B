import React from 'react';
import DatePickerContainer from '../../../util/DatePickerContainer';
import moment from 'moment';
import ScanOverviewList from '../../home/ScanOverviewList';
import {SafeAreaView, View} from 'react-native';

export default function HistoryView({navigation}) {
  const startMonthDate = moment()
    .startOf('month')
    .toDate();
  const endMonthDate = moment()
    .endOf('month')
    .toDate();

  const [startDate, setStartDate] = React.useState(startMonthDate);
  const [endDate, setEndDate] = React.useState(endMonthDate);

  const handleStartDateChange = date => {
    let newDate = new Date(date);

    if (newDate < endDate) {
      setStartDate(newDate);
    }
  };

  const handleEndDateChange = date => {
    let newDate = new Date(date);

    if (newDate > startDate) {
      setEndDate(newDate);
    }
  };

  return (
    <SafeAreaView>
      <DatePickerContainer
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
      />
      <ScanOverviewList
        navigation={navigation}
        startDate={startDate}
        endDate={endDate}
        location={1}
      />
    </SafeAreaView>
  );
}
