import QRCodeScanner from 'react-native-qrcode-scanner';
import {Alert, StyleSheet} from 'react-native';
import React from 'react';

export default function QrReaderView(props) {
  function handleScan(event) {
    let data = event.data;

    if (data) {
      if (!data.includes(';')) {
        Alert.alert(
          'Invalid QR-Code',
          'The QR code scanned was not associated with any equipment',
        );
        return;
      }

      let split = data.split(';');
      let equipment = split[0];
      let component = split[1];

      props.navigation.navigate('Scan', {
        screen: 'Result',
        params: {
          equipmentId: equipment,
          componentId: component,
        },
      });
    }
  }

  return <QRCodeScanner onRead={handleScan} reactivate={true} />;
}
