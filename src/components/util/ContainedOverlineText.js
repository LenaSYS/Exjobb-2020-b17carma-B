import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 6,
  },
});

export default function ContainedOverlineText(props) {
  return <Text style={styles.text}>{props.text.toUpperCase()}</Text>;
}
