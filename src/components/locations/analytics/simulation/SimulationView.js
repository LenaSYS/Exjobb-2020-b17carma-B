import React from 'react';
import now from 'performance-now';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Card} from 'react-native-elements';
import {material} from 'react-native-typography';
import * as RNFS from 'react-native-fs';

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
  const path = RNFS.DocumentDirectoryPath + '/results_native.txt';

  function saveResults() {
    RNFS.writeFile(path, areaText, 'utf8')
      .then(() => {
        console.log('Results saved');
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  async function simulatePosts(equipmentId, componentId, status) {
    setEnd(0);
    setStart(now());

    let lastTime = 0;
    let newText = '';

    for (let i = 0; i < 1000; i++) {
      const response = await fetch('https://api.carlmaier.se/scan', {
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
      <TextInput multiline label="Results" value={areaText} />
      <Button variant="contained" onPress={() => saveResults()} title="Save results" />
    </SafeAreaView>
  );
}
