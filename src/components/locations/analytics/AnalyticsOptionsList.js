import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {material} from 'react-native-typography';
import ContainedOverlineText from '../../util/ContainedOverlineText';

const styles = StyleSheet.create({
  titleText: {
    ...material.body1,
    fontSize: 15,
  },
});

export default function AnalyticsOptionsList(props) {
  return (
    <SafeAreaView>
      <ContainedOverlineText text="Options" />
      <ListItem
        title="Overall"
        titleStyle={styles.titleText}
        key="overall"
        leftIcon={
          <MaterialCommunityIcons name="poll-box" color="#9E9E9E" size={26} />
        }
        onPress={() => props.navigation.navigate('Overall')}
      />
      <ListItem
        title="Equipment"
        titleStyle={styles.titleText}
        key="equipment"
        leftIcon={
          <MaterialCommunityIcons name="wrench" color="#9E9E9E" size={26} />
        }
        onPress={() =>
          props.navigation.navigate('Equipment Analytics', {
            type: 1,
          })
        }
      />
      <ListItem
        key="scanHistory"
        title="Scan History"
        titleStyle={styles.titleText}
        leftIcon={
          <MaterialCommunityIcons
            name="clipboard-text"
            color="#9E9E9E"
            size={26}
          />
        }
        onPress={() => props.navigation.navigate('History')}
      />
      <ContainedOverlineText text="Debug" />
      <ListItem
        key="scanSimulation"
        title="Scan Simulation"
        titleStyle={styles.titleText}
        leftIcon={
          <MaterialCommunityIcons name="timer" color="#9E9E9E" size={26} />
        }
        onPress={() => props.navigation.navigate('Simulation')}
      />
    </SafeAreaView>
  );
}
