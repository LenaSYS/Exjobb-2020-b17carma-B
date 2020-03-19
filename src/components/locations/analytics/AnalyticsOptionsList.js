import React from 'react';
import {SafeAreaView} from 'react-native';
import {ListItem} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AnalyticsOptionsList(props) {
  return (
    <SafeAreaView>
      <ListItem
        title="Overall"
        key="overall"
        leftIcon={
          <MaterialCommunityIcons name="poll-box" color="#9E9E9E" size={26} />
        }
        onPress={() => props.navigation.navigate('Overall')}
      />
      <ListItem
        title="Equipment"
        key="equipment"
        leftIcon={
          <MaterialCommunityIcons name="wrench" color="#9E9E9E" size={26} />
        }
        onPress={() => props.navigation.navigate('Equipment Analytics')}
      />
      <ListItem
        key="scanHistory"
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
    </SafeAreaView>
  );
}
