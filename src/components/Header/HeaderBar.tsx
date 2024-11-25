import React from 'react';
import { useTheme } from '@/hooks';
import { View, Image, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { wp } from '@/utils/layout-scaling';

const HeaderBar = () => {
  const { Common, Images } = useTheme();
  const styles = getStyles();

  return (
    <View style={[[Common.header]]}>
      <Image source={Images.headerLogo} style={[styles.image]}></Image>
    </View>
  );
};
export default HeaderBar;

const getStyles = () =>
  StyleSheet.create({
    image: {
      marginTop: wp(17.75),
      marginBottom: wp(11),
      marginRight: wp(42.98),
      marginLeft: wp(42),
    },
  });
