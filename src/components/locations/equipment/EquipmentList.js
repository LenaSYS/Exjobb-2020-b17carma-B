import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Card, Icon} from 'react-native-elements';
import TranslatedImage from '../../util/TranslatedImage';

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  body: {
    fontWeight: '400',
    marginBottom: 8,
  },
});

export default function EquipmentList(props) {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unmounted = false;

    async function fetchEquipmentData() {
      const res = await fetch('https://api.carlmaier.se' + '/equipment');

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
  }, []);

  if (loading) {
    return <View />;
  }

  return equipment.map((equip, i) => (
    <Card key={i} image={TranslatedImage(equip.image)}>
      <Text style={styles.title}>{equip.identifier}</Text>
      <Text style={styles.body}>{equip._id}</Text>
      <Button
        icon={<Icon name="build" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        onPress={() =>
          props.navigation.navigate('Equipment Item', {
            equipmentId: equip._id,
          })
        }
        title="VIEW NOW"
      />
    </Card>
  ));
}
