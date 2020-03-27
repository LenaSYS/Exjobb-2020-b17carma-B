import React from 'react';
import {Card} from 'react-native-elements';
import TranslatedImage from '../../../../util/TranslatedImage';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  body: {
    fontWeight: '400',
    marginBottom: 8,
    color: 'grey',
  },
  cardContainer: {
    margin: 0,
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
  },
});

export default function ComponentInformationCard(props) {
  return (
    <Card
      containerStyle={styles.cardContainer}
      image={TranslatedImage(props.component.image)}>
      <Text style={styles.title}>
        {props.component.equipment.identifier} - {props.component.identifier}
      </Text>
      <Text style={styles.body}>{props.component.description}</Text>
    </Card>
  );
}
