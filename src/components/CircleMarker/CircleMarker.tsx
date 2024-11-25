import { useTheme } from '@/hooks';
import { boldFontFamily } from '@/theme/Fonts';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CircleMarker = ({ data }: any) => {
  const { Common, Fonts, Gutters } = useTheme();
  const styles = getStyles();
  return (
    <>
      <Text
        style={[
          Fonts.textBold,
          Fonts.textRegular,
          Fonts.textCenter,
          boldFontFamily,
          Gutters.largeLMargin,
          styles.textColor,
          Common.circle,
        ]}
      >
        {data}
      </Text>
    </>
  );
};

export default CircleMarker;
const getStyles = () =>
  StyleSheet.create({
    textColor: {
      color: '#B8001C',
      padding: 5,
    },
  });
