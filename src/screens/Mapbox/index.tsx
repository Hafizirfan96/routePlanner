import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';
import Mapbox, {
  Camera,
  Logger,
  MapView,
  MarkerView,
  ShapeSource,
  FillLayer,
  LineLayer,
} from '@rnmapbox/maps';
import Modal from 'react-native-modal';
import CircleMarker from '@/components/CircleMarker/CircleMarker';
import { useFetchTourByCodeQuery } from '@/services/modules/tour';
import { useTheme } from '@/hooks';
import { storage } from '@/store';
import { Colors, FontSize } from '@/theme/Variables';
import { navigate } from '@/navigators/navUtils';
import { wp } from '@/utils/layout-scaling';
import { StorageKeys } from '@/utils/localstorage';

Mapbox.setAccessToken(
  'pk.eyJ1IjoieWFzaXJiIiwiYSI6ImNsZGx1ZnA1ZTAzNGM0MG1mb2J4Nzc2MnIifQ.Vm9KR5F44R9oHdjuMj-87Q',
);

const MapboxScreen = () => {
  const { Gutters, Layout, Images } = useTheme();
  const code = storage.getString(StorageKeys.Code);
  const deviceID = storage.getString(StorageKeys.DeviceId);

  const codes = `${code}/${deviceID}`;
  const { data, isLoading } = useFetchTourByCodeQuery(codes);

  const [isModalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');

  const hideModal = () => {
    setModalVisible(false);
  };
  const clickImage = id => {
    setValue(id);
    setModalVisible(true);
  };

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
  const headerBar = () => {
    return (
      <View
        style={[
          Layout.row,
          Gutters.regularHPadding,
          Gutters.regularTPadding,
          Gutters.tinyBPadding,
          styles.header,
        ]}
      >
        <View style={[styles.headerImage]}>
          <TouchableOpacity onPress={() => navigate('TourDetail')}>
            <Image source={Images.leftArrow} />
          </TouchableOpacity>
        </View>
        <View>
          <Image source={Images.trailThief} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {headerBar()}
      <Mapbox.MapView
        style={styles.map}
        //showUserLocation={true}
        zoomEnabled={true}
        //zoomTapEnabled={true}
        //zoomControlEnabled={false}
        //pitchEnabled={true}
        //toolbarEnabled={true}
        //moveOnMarkerPress={true}
        attributionEnabled={false}
        logoEnabled={false}
      >
        {/* <Mapbox.UserLocation visible={true} /> */}
        <Mapbox.Camera
          zoomLevel={12}
          centerCoordinate={route[0]}
          animationMode="flyTo"
        />
        {routes ? (
          <Mapbox.ShapeSource id={routes.route.id} shape={routes.route}>
            {/* <Mapbox.LineLayer id="routeFill" style={styles.mapBoxLayer} />
            <Mapbox.FillLayer id="radiusFill" style={styles.fillColors} /> */}
            <Mapbox.LineLayer
              id="radiusOutline"
              style={styles.route}
              //aboveLayerID="radiusFill"
            />
          </Mapbox.ShapeSource>
        ) : null}

        {data?.Tourlocations?.filter(x => x.IsTourRoute)?.map((y, index) => {
          return (
            <Mapbox.MarkerView
              isSelected={true}
              coordinate={[y.Longitude, y.Latitude]}
              allowOverlap={true}
              id={'testing'}
            >
              <TouchableOpacity onPress={() => clickImage(y.Title)}>
                <CircleMarker data={index + 1} />
              </TouchableOpacity>
            </Mapbox.MarkerView>
          );
        })}
      </Mapbox.MapView>

      <View>
        <Modal isVisible={isModalVisible} onBackdropPress={hideModal}>
          <View style={[Layout.center, styles.modal]}>
            <Text style={[styles.modalText]}>{value}</Text>
          </View>
        </Modal>
      </View>
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
  modalText: {
    color: Colors.black,
    fontSize: FontSize.normal,
  },
  container: {
    height: '100%',
  },
  map: {
    flex: 1,
  },
  mapBoxLayer: {
    lineColor: Colors.white,
    lineWidth: wp(8),
  },
  fillColors: {
    fillColor: 'rgba(45, 200, 125, 0.1)',
  },
  route: {
    lineColor: Colors.strongRed,
    lineWidth: wp(4),
    lineDasharray: [2, 2],
    lineCap: 'butt',
    lineJoin: 'round',
  },
  header: {
    backgroundColor: Colors.headerFooterBackgroundColor,
  },
  headerImage: {
    flex: 0.5,
  },
});

export default MapboxScreen;
