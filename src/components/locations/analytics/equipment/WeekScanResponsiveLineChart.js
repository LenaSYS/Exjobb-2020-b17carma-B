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

      data.datasets[0].color = (opacity = 1) => `rgba(232, 193, 160, ${1})`;

      data.datasets[1].color = (opacity = 1) => `rgba(244, 117, 96, ${1})`;

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
      <LineChart
        data={chartData}
        width={Dimensions.get('window').width}
        height={325}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          fillShadowGradientOpacity: 0,
          strokeWidth: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />
    </View>
  );
}
