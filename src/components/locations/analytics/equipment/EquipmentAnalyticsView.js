import React from 'react';
import moment from 'moment';
import DatePickerContainer from '../../../util/DatePickerContainer';
import WeekScanResponsiveLineChart from './WeekScanResponsiveLineChart';
import {View} from 'react-native';

export default function EquipmentAnalyticsView({route}) {
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
    <View>
      <DatePickerContainer
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
      />
      <WeekScanResponsiveLineChart
        equipmentId={route.params.equipmentId}
        startDate={startDate}
        endDate={endDate}
      />
    </View>
  );
}
