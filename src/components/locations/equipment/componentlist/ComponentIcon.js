import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function scanStatus(component) {
  return component.lastScan === undefined
    ? 2
    : component.lastScan.status
    ? 0
    : 1;
}

const ComponentIcon = props => {
  const status = scanStatus(props.component);

  return status === 0 ? (
    <MaterialCommunityIcons name="check" color="#4CAF50" size={26} />
  ) : status === 1 ? (
    <MaterialCommunityIcons name="alert" color="#f44336" size={26} />
  ) : (
    <MaterialCommunityIcons name="cancel" color="#9E9E9E" size={26} />
  );
};

export default ComponentIcon;
