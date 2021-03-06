import React, {useCallback, useState} from 'react';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ListItem} from 'react-native-elements';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/core';
import ContainedOverlineText from '../../util/ContainedOverlineText';
import {material} from 'react-native-typography';
import ScanOverviewListItem from './ScanOverviewListItem';
import Configuration from '../../../Configuration';

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
  titleText: {
    ...material.body1,
    fontSize: 15,
  },
  captionText: {
    ...material.caption,
    fontSize: 14,
    marginTop: 4,
  },
});

export default function ScanOverviewList(props) {
  const [overview, setOverview] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let unmounted = false;

      let startDate = moment(props.startDate);
      let endDate = moment(props.endDate);

      async function fetchOverviewData() {
        const res = await fetch(
          Configuration.API_LOCATION +
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
    }, [props.startDate, props.endDate]),
  );

  if (loading) {
    return <View />;
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
      renderItem={({item}) => (
        <ScanOverviewListItem
          node={item}
          navigation={props.navigation}
          location={props.location}
        />
      )}
      stickySectionHeadersEnabled
      ListHeaderComponent={
        props.type === 0 ? (
          <ContainedOverlineText text="Weekly Overview" />
        ) : null
      }
      renderSectionHeader={({section}) => <HeaderItem date={section.title} />}
    />
  );
}
