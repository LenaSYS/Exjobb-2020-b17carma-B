import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Button, Card} from 'react-native-elements';

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
    <Card
      key={i}
      title={equip.identifier}
      image={require('../../../img/machine2.jpg')}>
      <Text style={{marginBottom: 10}}>{equip._id}</Text>
      <Button
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="VIEW NOW"
      />
    </Card>
  ));
}
