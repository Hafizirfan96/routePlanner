import React, { useEffect, useState } from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';
import { LeafletView, MapShapeType, MapShape } from 'react-native-leaflet-view';
import { LatLng } from 'react-leaflet';

import { useFetchTourByCodeQuery } from '@/services/modules/tour';
import { storage } from '@/store';
import { StorageKeys } from '@/utils/localstorage';

export default function LeafLetMap() {
  const storedCode = storage.getString(StorageKeys.Code);
  const storedDeviceId = storage.getString(StorageKeys.DeviceId);
  const codes = `${storedCode?.trim()}/${storedDeviceId}`;

  const { data } = useFetchTourByCodeQuery(codes);

  if (!data) return null;
  let route: any = [];
  data?.Tourlocations?.filter(x => x.IsTourRoute)?.map(y => {
    route.push({
      icon: '📍',
      size: [32, 32],
      position: {
        lat: y.Latitude,
        lng: y.Longitude,
      },
    });
  });

  let mapShape: MapShape[] = [];

  data?.Tourlocations?.filter((x: any) => x.IsTourRoute)?.map((z: any) => {
    const positions: LatLng = {
      lat: z.Latitude,
      lng: z.Longitude,
    };
    const y: MapShape = {
      positions: positions,
      shapeType: MapShapeType.POLYLINE,
    };
    mapShape.push(y);
  });

  return (
    <SafeAreaView style={styles.root}>
      {route && (
        <LeafletView
          mapMarkers={route}
          mapCenterPosition={{
            lat: route[0]?.position.lat,
            lng: route[0]?.position.lng,
          }}
          mapShapes={mapShape}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
