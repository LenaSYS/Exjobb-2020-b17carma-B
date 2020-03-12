import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
import {Card} from 'react-native-elements';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexGrow: 1,
    flexBasis: 0,
  },
  cardContainer: {
    margin: 0,
    flex: 1,
  },
});

export default function ComponentFrequency(props) {
  function translate(frequencyType) {
    return frequencyType === 0
      ? 'day'
      : frequencyType === 1
      ? 'week'
      : frequencyType === 2
      ? 'month'
      : 'year';
  }

  function translateDays(days) {
    let text = '';

    if (days.length === 0) {
      return 'Any week day';
    }

    days.forEach(function(day, i) {
      if (day === 1) {
        text += 'Mon';
      } else if (day === 2) {
        text += 'Tue';
      } else if (day === 3) {
        text += 'Wed';
      } else if (day === 4) {
        text += 'Thu';
      } else if (day === 5) {
        text += 'Fri';
      } else if (day === 6) {
        text += 'Sat';
      } else if (day === 7) {
        text += 'Sun';
      }

      if (days.length !== 1 && i !== days.length - 1) {
        text += ', ';
      }
    });

    return text;
  }

  return (
    <View style={styles.root}>
      <Card
        style={styles.card}
        containerStyle={styles.cardContainer}
        title={props.component.frequency + 'time(s)'}
      />
      <Card
        style={styles.card}
        containerStyle={styles.cardContainer}
        title={translate(props.component.frequencyType)}
      />
      <Card
        style={styles.card}
        containerStyle={styles.cardContainer}
        title={translateDays(props.component.frequencyDays)}
      />
    </View>
  );
}
