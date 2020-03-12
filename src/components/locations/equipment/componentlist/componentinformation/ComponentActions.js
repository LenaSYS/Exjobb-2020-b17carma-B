import React from 'react';
import {ListItem} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ComponentActions(props) {
  return (
    <ListItem
      onPress={() => props.navigation.navigate('Scan')}
      leftIcon={
        <MaterialCommunityIcons name="scanner" color="#9E9E9E" size={26} />
      }
      title="Scan Now"
    />
  );
}
