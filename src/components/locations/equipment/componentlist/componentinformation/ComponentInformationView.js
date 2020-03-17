import React from 'react';
import ComponentScanHistoryList from './ComponentScanHistoryList';
import ComponentInformationCard from './ComponentInformationCard';
import ComponentFrequency from './ComponentFrequency';
import ComponentActions from './ComponentActions';
import ContainedOverlineText from '../../../../util/ContainedOverlineText';
import {ScrollView, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/core';

export default function ComponentInformationView({route, navigation}) {
  const [component, setComponent] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useFocusEffect(() => {
    let unmounted = false;

    async function fetchComponentData() {
      const res = await fetch(
        'https://api.carlmaier.se' +
          '/components/' +
          route.params.equipmentId +
          '/' +
          route.params.componentId,
      );
      const component = await res.json();

      if (unmounted) {
        return;
      }

      setComponent(component);
      setLoading(false);
    }

    fetchComponentData();

    console.log('Fetched component data');
    return () => {
      unmounted = true;
    };
  }, [route.params.equipmentId, route.params.componentId]);

  if (loading) {
    return <View />;
  }

  return (
    <ScrollView>
      <ComponentInformationCard component={component} />
      <ContainedOverlineText text="Scan Frequency" />
      <ComponentFrequency component={component} />
      <ContainedOverlineText text="Actions" />
      <ComponentActions navigation={navigation} />
      <ComponentScanHistoryList
        equipmentId={route.params.equipmentId}
        componentId={route.params.componentId}
      />
    </ScrollView>
  );
}
