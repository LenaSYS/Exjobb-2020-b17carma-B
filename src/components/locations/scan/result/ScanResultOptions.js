import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  button: {
    marginLeft: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

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
      navigation.popToTop();
      navigation.navigate('Equipment Item', {
        equipmentId: props.component.equipment._id,
      });
    });
  }

  return (
    <Card>
      <Text>Is this component functioning properly?</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Yes"
          onPress={() => sendResults(true)}
        />
        <Button
          style={styles.button}
          title="No"
          onPress={() => sendResults(false)}
        />
        <Button
          style={styles.button}
          title="Cancel"
          onPress={() => navigation.goBack()}
        />
      </View>
    </Card>
  );
}
