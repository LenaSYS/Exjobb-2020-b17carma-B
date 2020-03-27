import QRCodeScanner from 'react-native-qrcode-scanner';
import {Alert, View} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/core';

export default function QrReaderView({navigation}) {
  const [error, setError] = React.useState(false);
  const scanner = useRef(null);

  function handleScan(event) {
    let data = event.data;

    if (data && !error) {
      if (!data.includes(';')) {
        setError(true);

        Alert.alert(
          'Invalid QR-Code',
          'The QR code scanned was not associated with any equipment',
          [
            {
              text: 'OK',
              onPress: () => {
                setError(false);
                scanner.current.reactivate();
              },
            },
          ],
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

  useFocusEffect(
    useCallback(() => {
      scanner.current.reactivate();
    }, []),
  );

  return (
    <View>
      <QRCodeScanner
        ref={scanner}
        reactivateTimeout={5000}
        onRead={handleScan}
      />
    </View>
  );
}
