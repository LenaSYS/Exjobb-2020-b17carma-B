import React from 'react';
import {Card} from 'react-native-elements';
import TranslatedImage from '../../../../util/TranslatedImage';
import {StyleSheet, Text} from 'react-native';
import {material} from 'react-native-typography';

const styles = StyleSheet.create({
  title: {
    ...material.headline,
    marginBottom: 10,
  },
  caption: {
    ...material.caption,
    fontSize: 14,
    marginBottom: 8,
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
      <Text style={styles.caption}>{props.component.description}</Text>
    </Card>
  );
}
