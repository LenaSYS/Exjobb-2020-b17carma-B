import React, {useEffect} from 'react';
import {View} from 'react-native';
import ContainedOverlineText from '../../../util/ContainedOverlineText';
import {ListItem} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ActionRequiredList(props) {
  const [requiredComponents, setRequiredComponents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
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
          onClick={() =>
            props.navigation.navigate('Equipment', {
              equipmentId: props.equipmentId,
              componentId: component._id,
            })
          }
        />
      ))}
    </View>
  );
}
