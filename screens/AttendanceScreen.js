import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Modal from 'react-native-modal';

export default function AttendanceScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanResult, setScanResult] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScanResult(data);
    setModalVisible(true);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ImageBackground source={require('../assets/Construcator.png')} style={styles.background}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <TouchableOpacity
          style={styles.opacityButton}
          onPress={() => setScanned(false)}>
          <Text style={styles.opacityButtonText}>Tekrar Okutmak İçin Tıklayın</Text>
        </TouchableOpacity>
      )}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.scanResult}>{`Scanned data: ${scanResult}`}</Text>
          <TouchableOpacity style={styles.button} onPress={toggleModal}>
            <Text style={styles.buttonText}>Yoklamaya Katıl</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {!scanned && <Text style={styles.prompt}>Lütfen QR Kodu Okutun</Text>}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#154F91',
    fontSize: 16,
  },
  scanResult: {
    fontSize: 18,
    marginBottom: 10,
  },
  prompt: {
    position: 'absolute',
    top: 50,
    fontSize: 18,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  opacityButton: {
    backgroundColor: 'lightblue',
    padding: 0.1,
    borderRadius: 10,
    alignItems: 'center',
    width: 250,
    margin: 3,
    marginTop: 490,
    marginLeft: 10
  },
  opacityButtonText: {
    padding: 10,
    color: '#154F91',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
