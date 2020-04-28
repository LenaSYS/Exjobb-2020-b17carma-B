import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import ContainedOverlineText from '../../../util/ContainedOverlineText';
import {ListItem} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFocusEffect} from '@react-navigation/core';
import {material} from 'react-native-typography';
import Configuration from '../../../../Configuration';

const styles = StyleSheet.create({
  titleText: {
    ...material.body1,
    fontSize: 15,
  },
});

export default function ActionRequiredList(props) {
  const [requiredComponents, setRequiredComponents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useFocusEffect(
    useCallback(() => {
      let unmounted = false;

      async function fetchRequiredComponents() {
        const res = await fetch(
          Configuration.API_LOCATION + '/scan/required/' + props.equipmentId,
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
    }, [props.equipmentId]),
  );

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
          titleStyle={styles.titleText}
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
