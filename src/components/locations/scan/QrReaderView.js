import QRCodeScanner from 'react-native-qrcode-scanner';
import {Alert, StyleSheet, View} from 'react-native';
import React from 'react';

export default function QrReaderView({route, navigation}) {
  const [error, setError] = React.useState(false);

  function handleScan(event) {
    let data = event.data;

    if (data && !error) {
      if (!data.includes(';')) {
        setError(true);

        Alert.alert(
          'Invalid QR-Code',
          'The QR code scanned was not associated with any equipment',
          [{text: 'OK', onPress: () => setError(false)}],
        );
        return;
      }

      let split = data.split(';');
      let equipment = split[0];
      let component = split[1];

      navigation.navigate('Result', {
        equipmentId: equipment,
        componentId: component,
      });
    }
  }

  return (
    <View>
      <QRCodeScanner
        onRead={handleScan}
        reactivate={true}
        reactivateTimeout={3000}
      />
    </View>
  );
}
