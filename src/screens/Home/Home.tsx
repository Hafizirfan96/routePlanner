import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { wp } from '@/utils/layout-scaling';
import CustomSafeArea from '@/components/CustomSafeArea';
import { navigateAndSimpleReset } from '@/navigators/navUtils';
import { storage } from '@/store';
import { useLazyFetchTourByCodeQuery } from '@/services/modules/tour';
import { getUniqueId } from '@/utils';
import { StorageKeys } from '@/utils/localstorage';

const Home = () => {
  const [code, setCode] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const [errors, setError] = useState('');
  const [fetchTourByCode, { isError, error, data, isLoading, isSuccess }] =
    useLazyFetchTourByCodeQuery();
  const storedCode = storage.getString(StorageKeys.Code);
  const { t } = useTranslation('welcome');
  const { Common, Fonts, Gutters, Layout, Colors, Images } = useTheme();
  const styles = getStyles(Colors);

  useEffect(() => {
    if (storedCode && storedCode !== '') {
      setTimeout(() => {
        // navigateAndSimpleReset('TourDetail');
        navigateAndSimpleReset('MapsScreen');
      }, 100);
    }
  }, []);

  useEffect(() => {
    const getDeviceId = async () => {
      const id = await getUniqueId();
      setDeviceId(id);
    };
    getDeviceId();
  }, []);

  useEffect(() => {
    if (isSuccess && data) {
      const uId = deviceId;
      storage.set(StorageKeys.DeviceId, uId);
      storage.set(StorageKeys.Code, code);
      setError('');
      // navigateAndSimpleReset('TourDetail');
      navigateAndSimpleReset('MapsScreen');
    }
  }, [isSuccess, data, deviceId]);

  const headingTrailTheif = () => {
    return (
      <>
        <Image source={Images.trailtheifLogo} style={styles.logo} />
        <Text
          style={[
            Fonts.textSmall,
            Gutters.smallVMargin,
            Fonts.textCenter,
            Gutters.largeHMargin,
          ]}
        >
          {t('text')}
        </Text>
      </>
    );
  };

  const verifyTourCode = async () => {
    if (code === '') {
      return;
    }
    const uId = deviceId;
    const codes = `${code}/${uId}`;
    await fetchTourByCode(codes);
  };

  const toureCode = () => {
    return (
      <View
        style={[Layout.column, Layout.alignItemsCenter, styles.tourCodeWrapper]}
      >
        <View
          style={[Gutters.regularPadding, Layout.fullWidth, styles.bgColors]}
        >
          <TextInput
            style={[Gutters.smallBMargin, Fonts.textTiny, styles.codeTextbox]}
            placeholder="Enter tour code"
            placeholderTextColor={Colors.lightGrey}
            value={code}
            onChangeText={setCode}
          />
          {isError && showError()}
          {(isLoading || storedCode) && (
            <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
          )}
          {!isLoading && !errors && (
            <View style={[Layout.center]}>
              <TouchableOpacity
                accessible={true}
                accessibilityRole="button"
                accessibilityLabel={'Tour Code'}
                accessibilityHint={''}
                style={[[Common.button.outline]]}
                activeOpacity={0.8}
                onPress={verifyTourCode}
                disabled={code === ''}
              >
                <Text style={[Common.button.buttonText]}>
                  {t('TourButton')}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const showError = () => {
    let errorText = '';
    if (error?.data.statusCode === 404) {
      errorText = 'Code does not exist.';
    } else if (error?.data.statusCode === 401) {
      errorText = 'Please enter a valid code';
    } else if (error?.data.statusCode === 409) {
      errorText = 'Allowed user limit has been exhaust';
    }
    return <Text style={{ color: Colors.strongRed }}>{errorText}</Text>;
  };
  return (
    <CustomSafeArea>
      <ImageBackground
        source={Images.trailtheifBackground}
        resizeMode="cover"
        style={[Layout.fullSize]}
      >
        <ScrollView contentContainerStyle={[Layout.flexGrow]}>
          <View style={[Layout.fill, Layout.column]}>
            <View
              style={[Layout.fill, styles.startWrapper, Gutters.largeHMargin]}
            >
              <View
                style={[Layout.fill, Layout.column, Layout.alignItemsCenter]}
              >
                {headingTrailTheif()}
              </View>
              {storedCode ? (
                <ActivityIndicator
                  size={'large'}
                  style={[Gutters.largeVMargin]}
                />
              ) : (
                toureCode()
              )}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </CustomSafeArea>
  );
};

export default Home;

const getStyles = (Colors: any) =>
  StyleSheet.create({
    logo: {
      height: wp(82),
      resizeMode: 'contain',
    },
    actionButton: {
      flex: 0.3,
    },
    startWrapper: {
      marginTop: wp(90),
    },
    tourCodeWrapper: {
      flex: 0.4,
    },
    codeTextbox: {
      borderWidth: 1,
      paddingTop: wp(5),
      paddingBottom: wp(5),
      paddingLeft: wp(10),
      paddingRight: wp(10),
    },
    bgColors: {
      backgroundColor: Colors.white,
    },
  });
