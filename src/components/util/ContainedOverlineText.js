import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {material} from 'react-native-typography';

const styles = StyleSheet.create({
  text: {
    ...material.body1,
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 10,
    marginLeft: 14,
    marginBottom: 6,
  },
});

export default function ContainedOverlineText(props) {
  return <Text style={styles.text}>{props.text.toUpperCase()}</Text>;
}
