import React, {useEffect} from 'react';
import {Dimensions, View} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

export default function OverallPieChart() {
  const [overallData, setOverallData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    let unmounted = false;

    async function fetchStatData() {
      const res = await fetch('https://api.carlmaier.se' + '/analytics/stats');
      const data = await res.json();

      if (unmounted) {
        return;
      }

      setOverallData(data);
      setLoading(false);
    }
    fetchStatData();

    console.log('Fetched stat data');
    return () => {
      unmounted = true;
    };
  }, []);

  if (loading) {
    return <View />; //TODO
  }

  const screenWidth = Dimensions.get('window').width;

  return (
    <PieChart
      data={overallData}
      width={screenWidth}
      height={220}
      chartConfig={{
        accessor: 'value',
        color: (opacity = 1) => `rgba(34,139,34, ${opacity})`,
      }}
      accessor="value"
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
    />
  );
}
