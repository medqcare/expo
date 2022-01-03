import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GradientHeader from '../../../components/headers/GradientHeader';
import { Camera } from 'expo-camera';

//action
const Assistant_scan = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await Camera.requestCameraPermissionsAsync();
      console.log(result);
      const { status } = result;
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(data, 'scan result'); // validate location in range 1km
  };

  if (hasPermission === null) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <GradientHeader
        title="Scan QR Code"
        navigate={props.navigation.navigate}
        navigateBack="AppointmentList"
      />
      <View style={styles.thisContainer}>
        <Camera
          onBarCodeScanned={!scanned ? handleBarCodeScanned : null}
          ratio="16:9"
          style={[
            StyleSheet.absoluteFillObject,
            { justifyContent: 'center', alignItems: 'center' },
          ]}
          type={Camera.Constants.Type.back}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={require('../../../assets/png/bracket.png')}
              style={{ width: 200, height: 200 }}
            />
          </View>
        </Camera>

        {scanned && (
          <TouchableOpacity
            onPress={() => setScanned(false)}
            style={styles.reScanTouch}
          >
            <View style={styles.reScanView}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={30}
                color="white"
              />
              <Text style={styles.reScanText}> Re-Scan </Text>
            </View>
          </TouchableOpacity>
        )}
        {!scanned && (
          <TouchableOpacity onPress={() => props.navigation.pop()}>
            <View style={styles.reScanViewNull}>
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
              >
                {' '}
                Back{' '}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {};

const styles = StyleSheet.create({
  thisContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  reScanView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'limegreen',
    borderRadius: 6,
  },
  reScanViewNull: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  reScanTouch: {
    width: '100%',
    alignItems: 'center',
  },
  reScanText: {
    color: 'white',
    margin: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  cameraContainer: {
    marginHorizontal: 0,
    marginLeft: 0,
    marginStart: 0,
    paddingHorizontal: 0,
    paddingLeft: 0,
    paddingStart: 0,
    height: '115%',
    padding: 0,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Assistant_scan);
