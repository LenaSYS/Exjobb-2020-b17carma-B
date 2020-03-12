import React, {useEffect} from 'react';
import moment from 'moment';
import ContainedOverlineText from '../../../../util/ContainedOverlineText';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ComponentScanHistoryList = props => {
  const [scans, setScans] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const scanLimit = 5;

  useEffect(() => {
    let unmounted = false;

    async function fetchScanData() {
      const res = await fetch(
        'https://api.carlmaier.se' +
          '/scan/' +
          props.equipmentId +
          '/' +
          props.componentId +
          '/' +
          scanLimit,
      );
      const data = await res.json();

      if (unmounted) {
        return;
      }

      setScans(data);
      setLoading(false);
    }

    fetchScanData();

    console.log('Fetched scan data');
    return () => {
      unmounted = true;
    };
  }, [props.equipmentId, props.componentId]);

  if (loading) {
    return <View />;
  }

  if (scans.length === 0) {
    return null;
  }

  function ListIcon(status) {
    return status ? (
      <MaterialCommunityIcons name="check" color="#4CAF50" size={26} />
    ) : (
      <MaterialCommunityIcons name="alert" color="#f44336" size={26} />
    );
  }

  return (
    <View>
      <ContainedOverlineText text="Recent scans" />
      {scans.map((scan, i) => (
        <ListItem
          key={i}
          leftIcon={ListIcon(scan.status)}
          title={moment(scan.time).format('DD/MM/YYYY HH:mm:ss')}
        />
      ))}
    </View>
  );
};

export default ComponentScanHistoryList;
