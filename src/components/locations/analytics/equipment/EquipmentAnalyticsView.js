import React from 'react';
import moment from 'moment';
import DatePickerContainer from '../../../util/DatePickerContainer';
import WeekScanResponsiveLineChart from './WeekScanResponsiveLineChart';
import {View} from 'react-native';

export default function EquipmentAnalyticsView({route}) {
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
      <WeekScanResponsiveLineChart
        equipmentId={route.params.equipmentId}
        startDate={startDate}
        endDate={endDate}
      />
    </View>
  );
}
