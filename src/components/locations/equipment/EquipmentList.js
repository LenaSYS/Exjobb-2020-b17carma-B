import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Card} from 'react-native-elements';
import TranslatedImage from '../../util/TranslatedImage';
import {useFocusEffect} from '@react-navigation/core';
import {material} from 'react-native-typography';
import Configuration from '../../../Configuration';

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
    margin: 8,
  },
});

export default function EquipmentList(props) {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let unmounted = false;

      async function fetchEquipmentData() {
        const res = await fetch(Configuration.API_LOCATION + '/equipment');

        res
          .json()
          .then(res => {
            if (unmounted) {
              return;
            }

            setEquipment(res);
            setLoading(false);
          })
          .catch(console.log);
      }

      fetchEquipmentData();

      console.log('Fetched equipment data');
      return () => {
        unmounted = true;
      };
    }, []),
  );

  if (loading) {
    return <View />;
  }

  return equipment.map((equip, i) => (
    <TouchableOpacity
      key={i}
      activeOpacity={0.6}
      onPress={() =>
        props.navigation.navigate(
          props.route.params.type === 0
            ? 'Equipment Item'
            : 'Equipment Analytics Item',
          {
            equipmentId: equip._id,
          },
        )
      }>
      <Card
        containerStyle={styles.cardContainer}
        key={i}
        image={TranslatedImage(equip.image)}>
        <Text style={styles.title}>{equip.identifier}</Text>
        <Text style={styles.caption}>{equip._id}</Text>
      </Card>
    </TouchableOpacity>
  ));
}
