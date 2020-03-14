import React, {useEffect} from 'react';
import ScanResultSteps from './ScanResultSteps';
import ScanResultOptions from './ScanResultOptions';
import ComponentInformationCard from '../../equipment/componentlist/componentinformation/ComponentInformationCard';
import {ScrollView, View} from 'react-native';

export default function ScanResultView({route, navigation}) {
  const [component, setComponent] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
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
      <ScanResultSteps component={component} />
      <ScanResultOptions component={component} />
    </ScrollView>
  );
}
