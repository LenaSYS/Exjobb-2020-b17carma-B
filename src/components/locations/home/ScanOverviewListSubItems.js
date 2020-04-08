import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ListItem} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {material} from 'react-native-typography';

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

export default function ScanOverviewListSubItems(props) {

  const ListIcon = props => {
    if (!props.component.hasOwnProperty('scanStatus')) {
      return <MaterialCommunityIcons name="cancel" color="#9E9E9E" size={26} />;
    } else if (props.component.scanStatus) {
      return <MaterialCommunityIcons name="check" color="#4CAF50" size={26} />;
    } else {
      return <MaterialCommunityIcons name="alert" color="#f44336" size={26} />;
    }
  };

  const components = props.components;

  return components.map((component, i) => (
    <ListItem
      title={component.identifier}
      titleStyle={styles.titleText}
      subtitleStyle={styles.captionText}
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
  ));
}
