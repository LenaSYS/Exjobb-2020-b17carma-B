import React from 'react';
import {Button, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/core';

export default function ScanResultOptions(props) {
  const navigation = useNavigation();

  function sendResults(status) {
    fetch('https://api.carlmaier.se' + '/scan', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        equipmentId: props.component.equipment._id,
        componentId: props.component._id,
        status: status,
      }),
    }).then(() => {
      navigation.navigate('Equipment Item', {
        equipmentId: props.component.equipment._id,
      });
    });
  }

  return (
    <Card>
      <Text>Is this component functioning properly?</Text>
      <Button title="Yes" onPress={() => sendResults(true)} />
      <Button title="No" onPress={() => sendResults(false)} />
      <Button title="No" onPress={() => navigation.navigate('Equipment')} />
    </Card>
  );
}
