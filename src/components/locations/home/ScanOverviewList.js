import React, {useEffect, useState} from 'react';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ListItem} from 'react-native-elements';
import {SafeAreaView, SectionList, Text, View} from 'react-native';

export default function ScanOverviewList(props) {
  const [overview, setOverview] = useState([]);
  const [loading, setLoading] = useState(true);

  const ListIcon = props => {
    if (!props.component.hasOwnProperty('scanStatus')) {
      return <MaterialCommunityIcons name="cancel" color="#9E9E9E" size={26} />;
    } else if (props.component.scanStatus) {
      return <MaterialCommunityIcons name="check" color="#4CAF50" size={26} />;
    } else {
      return <MaterialCommunityIcons name="alert" color="#f44336" size={26} />;
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

  function Item({component}) {
    return (
      <ListItem
        title={component.identifier}
        subtitle={component.equipment.identifier}
        leftIcon={<ListIcon component={component} />}
        onPress={() => props.navigation.navigate('Equipment')}
        bottomDivider
        chevron
      />
    );
  }

  return (
    <SafeAreaView>
      <SectionList
        sections={overview}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item component={item} />}
        stickySectionHeadersEnabled
        renderSectionHeader={({section: {date}}) => (
          <ListItem
            title={<Text>{moment(date).format('DD/MM/YY - dddd')}</Text>}
          />
        )}
      />
    </SafeAreaView>
  );
}
