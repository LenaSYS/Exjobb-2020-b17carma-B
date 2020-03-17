import React from 'react';
import {View} from 'react-native';
import ContainedOverlineText from '../../../util/ContainedOverlineText';
import {ListItem} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFocusEffect} from '@react-navigation/core';

export default function ActionRequiredList(props) {
  const [requiredComponents, setRequiredComponents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useFocusEffect(() => {
    let unmounted = false;

    async function fetchRequiredComponents() {
      const res = await fetch(
        'https://api.carlmaier.se' + '/scan/required/' + props.equipmentId,
      );
      const components = await res.json();

      if (unmounted) {
        return;
      }

      setRequiredComponents(components);
      setLoading(false);
    }

    fetchRequiredComponents();

    console.log('Fetched required components');
    return () => {
      unmounted = true;
    };
  }, [props.equipmentId]);

  if (loading) {
    return <View />; //TODO
  }

  if (requiredComponents.length === 0) {
    return null;
  }

  return (
    <View>
      <ContainedOverlineText text="Action Required" />
      {requiredComponents.map((component, i) => (
        <ListItem
          key={i}
          leftIcon={
            <MaterialCommunityIcons name="alarm" color="#9E9E9E" size={26} />
          }
          title={component.identifier}
          onPress={() =>
            props.navigation.navigate('Component', {
              equipmentId: props.equipmentId,
              componentId: component._id,
            })
          }
        />
      ))}
    </View>
  );
}
