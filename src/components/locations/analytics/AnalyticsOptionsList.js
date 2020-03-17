import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AnalyticsOptionsList(props) {
  return (
    <ScrollView>
      <ListItem
        title="Overall"
        leftIcon={
          <MaterialCommunityIcons name="poll-box" color="#9E9E9E" size={26} />
        }
        onPress={() => props.navigation.navigate('Overall')}
      />
      <ListItem
        title="Equipment"
        leftIcon={
          <MaterialCommunityIcons name="wrench" color="#9E9E9E" size={26} />
        }
      />
      <ListItem
        title="Scan History"
        leftIcon={
          <MaterialCommunityIcons
            name="clipboard-text"
            color="#9E9E9E"
            size={26}
          />
        }
        onPress={() => props.navigation.navigate('History')}
      />
    </ScrollView>
  );
}
