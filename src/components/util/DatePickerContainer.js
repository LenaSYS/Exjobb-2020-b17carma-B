import React from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default function DatePickerContainer(props) {
  return (
    <View>
      <DatePicker
        mode="date"
        placeholder="Start date"
        date={props.startDate}
        format="MM/DD/YYYY"
        onDateChange={props.handleStartDateChange}
      />
      <DatePicker
        mode="date"
        placeholder="End date"
        date={props.endDate}
        format="MM/DD/YYYY"
        onDateChange={props.handleEndDateChange}
      />
    </View>
  );
}
