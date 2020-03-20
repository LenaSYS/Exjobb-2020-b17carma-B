import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';
import {useFocusEffect} from '@react-navigation/core';

const styles = StyleSheet.create({
  headerStyle: {
    paddingTop: 7,
    paddingBottom: 7,
  },
});

export default function ScanResultSteps(props) {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSessions, setActiveSessions] = useState([0]);

  useFocusEffect(
    useCallback(() => {
      let unmounted = false;

      async function fetchStepData() {
        const res = await fetch(
          'https://api.carlmaier.se' +
            '/components/' +
            props.component.equipment._id +
            '/' +
            props.component._id +
            '/steps',
        );

        res
          .json()
          .then(res => {
            if (unmounted) {
              return;
            }

            setSteps(res);
            setLoading(false);
          })
          .catch(console.log);
      }

      fetchStepData();

      console.log('Fetched step data');
      return () => {
        unmounted = true;
      };
    }, [props.component.equipment, props.component._id]),
  );

  if (loading || steps.length === 0) {
    return <View />;
  }

  function renderHeader(section) {
    return (
      <View style={styles.headerStyle}>
        <Text>{section.identifier}</Text>
      </View>
    );
  }

  function renderContent(section) {
    return (
      <View>
        <Text>{section.description}</Text>
      </View>
    );
  }

  function updateSections(sections) {
    setActiveSessions(sections);
  }

  return (
    <Card>
      <Accordion
        sections={steps}
        touchableComponent={TouchableOpacity}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
        activeSections={activeSessions}
      />
    </Card>
  );
}
