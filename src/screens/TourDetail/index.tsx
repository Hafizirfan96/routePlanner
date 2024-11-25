import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useTheme } from '@/hooks';
import CustomSafeArea from '@/components/CustomSafeArea';
import getStyles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigate, navigateAndSimpleReset } from '@/navigators/navUtils';
import { storage } from '@/store';
// import SmallMapBox from '../Mapbox/SmallMapBox';
import { useFetchTourByCodeQuery } from '@/services/modules/tour';
import { useLogOutMutation } from '@/services/modules/logout';
import { StorageKeys } from '@/utils/localstorage';

const TourDiscripition = () => {
  const code = storage.getString(StorageKeys.Code);
  const deviceID = storage.getString(StorageKeys.DeviceId);
  const codes = `${code}/${deviceID}`;
  const { data, isLoading } = useFetchTourByCodeQuery(codes);

  const [deletePost] = useLogOutMutation();
  const { Fonts, Gutters, Layout, Images, Colors, FontSize } = useTheme();
  const styles = getStyles(Fonts, Colors, Layout, Gutters, FontSize);

  const headerBar = () => {
    return (
      <View
        style={[
          Layout.row,
          Gutters.regularHPadding,
          Gutters.regularTPadding,
          Gutters.tinyBPadding,
          Layout.justifyContentBetween,
          styles.header,
        ]}
      >
        <TouchableOpacity onPress={() => navigate('Home')}>
          <Image source={Images.leftArrow} />
        </TouchableOpacity>

        <Image source={Images.trailThief} />
        <Image source={Images.squreArrow} />
      </View>
    );
  };

  const TourDetail = () => {
    return (
      <View>
        <View style={[styles.midHeading]}>
          <Text
            style={[
              styles.midHeadingText,
              Gutters.tinyTMargin,
              Gutters.mediumPlusLMargin,
              Gutters.mediumlittPlusRMargin,
              Gutters.smallBMargin,
            ]}
          >
            {data.Description}
          </Text>
        </View>

        <View style={[Gutters.smallVPadding, styles.borderColor]}>
          <View style={[Layout.justifyContentAround, Layout.row]}>
            <Image source={Images.dager} />

            <Image source={Images.doubleArrow} />

            <Image source={Images.middels} />
          </View>

          <View
            style={[
              Layout.justifyContentBetween,
              Layout.row,
              Gutters.tinyTPadding,
              Gutters.mediumPlusLMargin,
              styles.dagerView,
            ]}
          >
            <Text style={[Fonts.textTiny]}>{Days?.toFixed(1)} dager </Text>
            <Text style={[Fonts.textTiny]}>
              {totalDistance?.toFixed(1)} + km{' '}
            </Text>
            <Text style={[Fonts.textTiny]}>{data?.Level} </Text>
          </View>
        </View>
      </View>
    );
  };

  const logOut = () => {
    deletePost(deviceID);
    storage.set(StorageKeys.Code, '');
    storage.set(StorageKeys.DeviceId, '');
    navigateAndSimpleReset('Home');
  };

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (!data) {
    return null;
  }
  try {
    const Distance = JSON?.parse(data?.RouteJson);
    var totalDistance = Distance.summary.totalDistance / 1000;
    const totalTime = Distance.summary.totalTime;
    var hours = totalTime / 3600;
    var Days = hours / 24;
  } catch (error) {
    console.error('Invalid JSON:', error);
  }

  return (
    <CustomSafeArea>
      <View style={[Layout.fill]}>
        {headerBar()}

        <View style={[styles.mapSpace]}>{/* <SmallMapBox /> */}</View>
        <View style={[styles.subHeding]}>
          <Text
            style={[
              Gutters.mediumPlusLMargin,
              Gutters.regularTMargin,
              Fonts.textRegular,
            ]}
          >
            {data.Title}
          </Text>
        </View>

        {TourDetail()}

        <View style={[Layout.fill, Layout.row, styles.dagerHeading]}>
          <View style={[styles.navigationView, Layout.alignItemsCenter]}>
            <View
              style={[
                styles.navigationView1,
                Layout.alignItemsCenter,
                Layout.justifyContentCenter,
              ]}
            >
              <TouchableOpacity onPress={() => navigate('MapboxScreen')}>
                <Text style={[styles.navigationText]}>START NAVIGATION</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* {headerBottom()} */}
      </View>
      <TouchableOpacity
        onPress={logOut}
        style={{ height: 30, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </CustomSafeArea>
  );
};

export default TourDiscripition;
