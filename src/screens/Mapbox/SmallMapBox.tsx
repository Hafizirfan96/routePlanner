import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
// import Mapbox from '@rnmapbox/maps';
import { useFetchTourByCodeQuery } from '@/services/modules/tour';
import { reduxStorage } from '@/store';
import { Colors } from '@/theme/Variables';
import { wp } from '@/utils/layout-scaling';

//  Mapbox.setAccessToken(
//    'pk.eyJ1IjoieWFzaXJiIiwiYSI6ImNsZGx1ZnA1ZTAzNGM0MG1mb2J4Nzc2MnIifQ.Vm9KR5F44R9oHdjuMj-87Q',
//  );

const SmallMapBox = () => {
  const code = reduxStorage.getItem('code');
  const deviceID = reduxStorage.getItem('deviceID');

  const codes = `${code._j}/${deviceID._j}`;
  const { data, isLoading } = useFetchTourByCodeQuery(codes);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (!data) return null;

  let route: any = [];
  let routes: any;
  const dataa = JSON.parse(data?.RouteJson);
  dataa?.coordinates?.filter(x => {
    route.push([x.lng, x.lat]);
  });

  routes = {
    route: {
      id: 'route',
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          source: 'route',
          geometry: {
            type: 'LineString',
            coordinates: route,
          },
        },
      ],
    },
  };

  return (
    <View style={styles.container}>
      <Mapbox.MapView
        style={styles.map}
        showUserLocation={true}
        zoomEnabled={true}
        zoomTapEnabled={true}
        zoomControlEnabled={true}
        pitchEnabled={true}
        toolbarEnabled={true}
        moveOnMarkerPress={true}
      >
        <Mapbox.UserLocation visible={true} />
        <Mapbox.Camera
          zoomLevel={12}
          centerCoordinate={route[0]}
          animationMode="flyTo"
        />
        {routes ? (
          <Mapbox.ShapeSource id={routes.route.id} shape={routes.route}>
            <Mapbox.LineLayer id="routeFill" style={styles.mapBoxLayer} />
            <Mapbox.FillLayer id="radiusFill" style={styles.fillColors} />
            <Mapbox.LineLayer
              id="radiusOutline"
              style={styles.route}
              aboveLayerID="radiusFill"
            />
          </Mapbox.ShapeSource>
        ) : null}
      </Mapbox.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  modal: {
    flex: 0.1,
    backgroundColor: Colors.white,
  },
  container: {
    height: '100%',
  },
  map: {
    flex: 1,
  },
  route: {
    lineColor: Colors.green,
    lineWidth: wp(7),
  },
  mapBoxLayer: {
    lineColor: Colors.white,
    lineWidth: wp(8),
  },
  fillColors: {
    fillColor: 'rgba(45, 200, 125, 0.1)',
  },
  header: {
    backgroundColor: Colors.headerFooterBackgroundColor,
  },
  headerImage: {
    flex: 0.5,
  },
});

export default SmallMapBox;
