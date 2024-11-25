import { useTheme } from '../../hooks';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';
import { wp } from '@/utils/layout-scaling';

const BodyFront =() => {
    const { Layout } = useTheme();
    const { t } = useTranslation('welcome');
    const styles = getStyles();
    return(
        <View
            style={[
              Layout.row,
              Layout.justifyContentBetween,
              Layout.ListHeader,
             ]}
          >
            <Text style={[ styles.navntext]}>
                {t('LagetsNavn')}
            </Text>
            <Text style={[styles.timetext]}>
                {t('time')}
            </Text>
        </View>)
}

export default BodyFront;

const getStyles = () =>
  StyleSheet.create({
    timetext: {
      color: '#B8001C',
      marginRight: wp(24), 
      marginTop: wp(22), 
      marginBottom: wp(22),
      fontSize: wp(20), 
      lineHeight: wp(22),
      fontFamily: 'Montserrat-SemiBold',
    },
    navntext: {
      color: '#001D32',
      marginTop: wp(22),
      marginBottom: wp(22), 
      marginLeft: wp(30), 
      lineHeight: wp(22),
      fontSize: wp(20),
      fontFamily: 'Montserrat-SemiBold',
    },
  });