import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import TranslatedImage from '../../../util/TranslatedImage';
import {useFocusEffect} from '@react-navigation/core';

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  body: {
    fontWeight: '400',
    marginBottom: 8,
  },
  cardContainer: {
    margin: 0,
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
  },
});

export default function EquipmentInfoCard(props) {
  const [equipment, setEquipment] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  useFocusEffect(() => {
    let unmounted = false;

    async function fetchEquipmentInfo() {
      const res = await fetch(
        'https://api.carlmaier.se' + '/equipment/' + props.equipmentId,
      );
      const data = await res.json();

      if (unmounted) {
        return;
      }

      setEquipment(data);
      setLoading(false);
    }

    fetchEquipmentInfo();
    console.log('Fetched equipment info');
    return () => {
      unmounted = true;
    };
  }, [props.equipmentId]);

  if (loading) {
    return <View />;
  }

  return (
    <Card
      containerStyle={styles.cardContainer}
      image={TranslatedImage(equipment.image)}>
      <Text style={styles.title}>{equipment.identifier}</Text>
    </Card>
  );
}
