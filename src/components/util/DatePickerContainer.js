import React from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Divider} from 'react-native-elements';

export default function DatePickerContainer(props) {
  return (
    <View>
      <View>
        <DateTimePicker
          mode="date"
          id="start-date-picker"
          label="Start date"
          value={props.startDate}
          format="MM/DD/YYYY"
          onChange={props.handleStartDateChange}
        />
      </View>
      <View>
        <DateTimePicker
          mode="date"
          id="end-date-picker"
          label="End date"
          value={props.endDate}
          format="MM/DD/YYYY"
          onChange={props.handleEndDateChange}
        />
      </View>
      <Divider />
    </View>
  );
}
