import ContainedOverlineText from '../../../util/ContainedOverlineText';
import React, {useEffect} from 'react';
import moment from 'moment';
import {Dimensions, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

export default function WeekScanResponsiveLineChart(props) {
  const [chartData, setChartData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    let unmounted = false;

    async function fetchChartData() {
      const res = await fetch(
        'https://api.carlmaier.se' +
          '/analytics/scans/' +
          props.equipmentId +
          '/' +
          moment(props.startDate).format() +
          '/' +
          moment(props.endDate).format() +
          '/native',
      );
      const data = await res.json();

      if (unmounted) {
        return;
      }

      setChartData(data);
      setLoading(false);
    }

    fetchChartData();

    console.log('Fetched chart data');
    return () => {
      unmounted = true;
    };
  }, [props.equipmentId, props.startDate, props.endDate]);

  if (loading) {
    return <View />; //TODO
  }

  return (
    <View>
      <ContainedOverlineText text="Scans by week" />
      <View>
        <LineChart
          data={chartData}
          width={Dimensions.get('window').width}
          height={250}
          margin={{top: 5, right: 30, bottom: 50, left: 50}}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
}
