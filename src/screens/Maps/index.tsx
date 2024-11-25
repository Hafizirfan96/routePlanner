import React, { useEffect, useState } from 'react';

import { StyleSheet, SafeAreaView, Text } from 'react-native';

import MapView, {
  PROVIDER_GOOGLE,
  enableLatestRenderer,
} from 'react-native-maps';
enableLatestRenderer();

export default function MapsScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      ></MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
