import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import CustomSafeArea from '@/components/CustomSafeArea';
import { ListData } from '@/translations/resources/en/ListData';
import HeaderBar from '../../components/Header/HeaderBar';
import BodyFront from '../../components/BodyFront/BodyFront';
import CircleMarker from '@/components/CircleMarker/CircleMarker';
import Button from '@/components/Button/Button';
import { wp } from '@/utils/layout-scaling';

const ListView = () => {
  const { t } = useTranslation('welcome');
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();
  const styles = getStyles();

  const renderListSeperator = () => {
    return <View style={[Fonts.ListBorder]} />;
  };

  const renderItems = ({ item }: any) => {
    return (
      <View
        key={item.key}
        style={[
          Layout.row,
          Layout.alignItemsCenter,
          Gutters.smallTPadding,
          Gutters.smallBPadding,
        ]}
      >
        <CircleMarker data={item.key} />
        <View style={[styles.textView]}>
          <Text style={[styles.textNavn]}>{item.navn}</Text>
        </View>
        <Text style={[styles.textPoeng]}>{item.poeng}</Text>
      </View>
    );
  };
  return (
    <CustomSafeArea>
      <View style={[Layout.fill]}>
        <HeaderBar />
        <View style={[Layout.bodyHeight, styles.bodyContainer]}>
          <BodyFront />
          <FlatList
            data={ListData}
            renderItem={renderItems}
            ItemSeparatorComponent={renderListSeperator}
          />
        </View>
        <View style={[Common.footer]}>
          <View
            style={[
              Layout.row,
              styles.buttonContainer,
              Layout.justifyContentAround,
            ]}
          >
            <Button name={t('KartButton')} style={Common.button.secondary} />
            <Button
              name={t('PoengsumButton')}
              style={Common.button.secondary}
            />
          </View>
        </View>
      </View>
    </CustomSafeArea>
  );
};

export default ListView;

const getStyles = () =>
  StyleSheet.create({
    buttonContainer: {
      marginLeft: wp(103),
      marginRight: wp(103),
      marginTop: wp(20),
      marginBottom: wp(19),
    },
    textView: {
      width: wp(168),
      marginLeft: wp(13),
    },
    textNavn: {
      fontFamily: 'Montserrat-Bold',
      fontSize: wp(12),
      lineHeight: wp(15),
      color: '#012439',
    },
    textPoeng: {
      fontFamily: 'Montserrat-Bold',
      fontSize: wp(12),
      lineHeight: wp(25),
      marginRight: wp(44),
      letterSpacing: wp(0.5),
      color: '#6EB8EB',
    },
    bodyContainer: {
      backgroundColor: '#ffffff',
    },
  });
