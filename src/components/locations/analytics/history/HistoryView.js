import React from 'react';
import DatePickerContainer from '../../../util/DatePickerContainer';
import moment from 'moment';
import ScanOverviewList from '../../home/ScanOverviewList';
import {View} from 'react-native';

export default function HistoryView() {
  const startMonthDate = moment().startOf('month');
  const endMonthDate = moment().endOf('month');

  const [startDate, setStartDate] = React.useState(startMonthDate);
  const [endDate, setEndDate] = React.useState(endMonthDate);

  const handleStartDateChange = date => {
    if (date < endDate) {
      setStartDate(date);
    }
  };

  const handleEndDateChange = date => {
    if (date > startDate) {
      setEndDate(date);
    }
  };

  return (
    <View>
      <DatePickerContainer
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
      />
      <ScanOverviewList startDate={startDate} endDate={endDate} />
    </View>
  );
}
