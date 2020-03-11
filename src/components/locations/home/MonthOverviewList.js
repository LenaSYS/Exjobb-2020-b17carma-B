import React, {useEffect, useState} from 'react';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ListItem} from 'react-native-elements';
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';

export default function MonthOverviewList(props) {
  const [overview, setOverview] = useState([]);
  const [loading, setLoading] = useState(true);

  const ListIcon = props => {
    if (!props.component.hasOwnProperty('scanStatus')) {
      return <MaterialCommunityIcons name="cancel" size={26} />;
    } else if (props.component.scanStatus) {
      return <MaterialCommunityIcons name="check" color={'hsl()'} size={26} />;
    } else {
      return <MaterialCommunityIcons name="alert" size={26} />;
    }
  };

  useEffect(() => {
    let unmounted = false;

    let startDate = moment(props.startDate);
    let endDate = moment(props.endDate);

    async function fetchOverviewData() {
      const res = await fetch(
        'https://api.carlmaier.se' +
          '/analytics/overview/' +
          startDate.format() +
          '/' +
          endDate.format(),
      );

      res
        .json()
        .then(data => {
          if (unmounted) {
            return;
          }

          setOverview(data);
          setLoading(false);
        })
        .catch(console.log);
    }

    fetchOverviewData();

    console.log('Fetched overview data');
    return () => {
      unmounted = true;
    };
  }, [props, props.startDate, props.endDate]);

  if (loading) {
    return <View />;
  }

  console.log(overview);

  return (
    <ScrollView>
      {overview.map(overviewDate =>
        overviewDate.data.map((component, i) => (
          <ListItem
            key={`${component.equipment.identifier} - ${component.identifier}`}
            title={`${component.equipment.identifier} - ${
              component.identifier
            }`}
            leftIcon={<ListIcon component={component} />}
            bottomDivider
          />
        )),
      )}
    </ScrollView>
  );
}
