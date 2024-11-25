import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tour = () => {
  const { t } = useTranslation('welcome');
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        //Layout.colCenter,
        //Layout.scrollSpaceBetween,
        Gutters.regularHPadding,
      ]}
    >
      <View
        style={[Layout.fullWidth, Gutters.smallVMargin, Gutters.largeTMargin]}
      >
        <View style={[Layout.row, Layout.center, Gutters.mediumPlusBMargin]}>
          <Text style={[Fonts.titleRegular]}>Trail Theif</Text>
        </View>
        <View style={[Layout.row, Layout.center, Gutters.mediumHMargin]}>
          <Text
            style={[Fonts.textSmall, Gutters.mediumBMargin, Fonts.textCenter]}
          >
            {t('text')}
          </Text>
        </View>

        <TouchableOpacity style={[Common.button.outlineFill, Layout.fullWidth]}>
          <Text
            style={[
              Fonts.textTiny,
              Fonts.textUppercase,
              Fonts.textCenter,
              { color: Colors.white },
            ]}
          >
            {t('TourButton')}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Tour;
