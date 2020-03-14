import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';

export default function ScanResultSteps(props) {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, [props.component.equipment, props.component._id]);

  if (loading || steps.length === 0) {
    return <View />;
  }

  function renderHeader(section) {
    return (
      <View>
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

  function updateSections(section) {}

  function renderSectionTitle(section) {
    return (
      <View>
        <Text>{section.description}</Text>
      </View>
    );
  }

  return (
    <Card>
      <Accordion
        sections={steps}
        renderHeader={renderHeader}
        renderContent={renderContent}
        renderSectionTitle={renderSectionTitle}
        onChange={updateSections}
        activeSections={[0]}
      />
    </Card>
  );
}
