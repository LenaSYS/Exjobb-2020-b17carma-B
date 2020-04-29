import React from 'react';
import now from 'performance-now';
import {Linking} from 'react-native';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {material} from 'react-native-typography';
import Configuration from '../../../../Configuration';

const styles = StyleSheet.create({
  paper: {
    padding: 4,
    marginBottom: 4,
  },
  button: {
    marginBottom: 4,
  },
  box: {
    marginBottom: 4,
  },
});

export default function SimulationView() {
  const [start, setStart] = React.useState(0);
  const [areaText, setAreaText] = React.useState('');
  const [end, setEnd] = React.useState(0);

  function saveResults() {
    Linking.openURL(
      `mailto:b17carma@student.his.se?subject=ReactNativeResults&body=${areaText}`,
    );
  }

  async function simulatePosts(equipmentId, componentId, status) {
    setEnd(0);
    setStart(now());

    let lastTime = 0;
    let newText = '';

    for (let i = 0; i < 5000; i++) {
      const response = await fetch(Configuration.API_LOCATION + '/scan', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          equipmentId: equipmentId,
          componentId: componentId,
          status: status,
        }),
      });
      await response.json();

      let timeNow = now();

      if (lastTime !== 0) {
        newText += timeNow - lastTime + '\n';
      }

      lastTime = timeNow;
    }
    setAreaText(newText);
    setEnd(now());
  }

  return (
    <SafeAreaView>
      <Card>
        <Text style={material.body1}>Start: {start}</Text>
        <Text style={material.body1}>End: {end}</Text>
        <Text style={material.body1}>
          Diff: {end === 0 ? null : end - start}
        </Text>
      </Card>
      <View style={styles.box}>
        <Button
          variant="contained"
          onPress={() =>
            simulatePosts(
              '5e53f1c36c7df42438366bde',
              '5e53f1c36c7df42438366be0',
              true,
            )
          }
          title="Start Simulation"
        />
      </View>
      <Button
        variant="contained"
        onPress={() => saveResults()}
        title="Save results"
      />
    </SafeAreaView>
  );
}
