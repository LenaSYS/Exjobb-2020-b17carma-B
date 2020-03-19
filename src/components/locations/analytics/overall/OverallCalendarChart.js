import React, {useCallback} from 'react';
import {ScrollView, View} from 'react-native';
import {ContributionGraph} from 'react-native-chart-kit';
import moment from 'moment';
import {useFocusEffect} from '@react-navigation/core';

export default function OverallCalendarChart() {
  const [calendar, setCalendar] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useFocusEffect(
    useCallback(() => {
      let unmounted = false;

      async function fetchCalendarData() {
        const res = await fetch(
          'https://api.carlmaier.se' + '/analytics/calendar',
        );
        const data = await res.text();
        const formattedData = data
          .replace(/day/g, 'date')
          .replace(/value/g, 'count');
        if (unmounted) {
          return;
        }

        setCalendar(JSON.parse(formattedData));
        setLoading(false);
        console.log(formattedData);
      }

      fetchCalendarData();

      console.log('Fetched calendar data');
      return () => {
        unmounted = true;
      };
    }, []),
  );

  if (loading) {
    return <View />; //TODO
  }

  return (
    <ScrollView horizontal={true}>
      <ContributionGraph
        values={calendar}
        endDate={moment()
          .endOf('year')
          .format('YYYY-MM-DD')}
        numDays={365}
        width={1160}
        height={220}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(34,139,34, ${opacity})`,
        }}
      />
    </ScrollView>
  );
}
