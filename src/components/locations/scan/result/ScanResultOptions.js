import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  buttonView: {
    marginRight: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  cardContainer: {
    margin: 8,
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
    <Card containerStyle={styles.cardContainer}>
      <Text>Is this component functioning properly?</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonView}>
          <Button
            title="Yes"
            type="outline"
            onPress={() => sendResults(true)}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            title="No"
            type="outline"
            onPress={() => sendResults(false)}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            title="Cancel"
            type="outline"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </Card>
  );
}
