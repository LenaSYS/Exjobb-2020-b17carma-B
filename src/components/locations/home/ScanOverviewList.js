import React, {useCallback, useState} from 'react';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ListItem} from 'react-native-elements';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/core';
import ContainedOverlineText from '../../util/ContainedOverlineText';
import { material } from 'react-native-typography'

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  headerText: {
    color: 'grey',
  },
});

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

  useFocusEffect(
    useCallback(() => {
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
    }, [props]),
  );

  if (loading) {
    return <View />;
  }

  function Item({component}) {
    return (
      <ListItem
        title={component.identifier}
        titleStyle={material.body1}
        subtitle={component.equipment.identifier}
        leftIcon={<ListIcon component={component} />}
        onPress={() =>
          props.navigation.navigate(
            props.type === 0 ? 'HomeTab' : 'AnalyticsTab',
            {
              screen: 'Component',
              params: {
                equipmentId: component.equipment._id,
                componentId: component._id,
              },
            },
          )
        }
      />
    );
  }

  function HeaderItem({date}) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {moment(date).format('DD/MM/YY - dddd')}
        </Text>
      </View>
    );
  }

  return (
    <SectionList
      sections={overview}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item component={item} />}
      stickySectionHeadersEnabled
      ListHeaderComponent={
        props.type === 0 ? (
          <ContainedOverlineText text="Weekly Overview" />
        ) : null
      }
      renderSectionHeader={({section: {date}}) => <HeaderItem date={date} />}
    />
  );
}
