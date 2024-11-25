import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import CustomSafeArea from '@/components/CustomSafeArea';
import HeaderBar from '../../components/Header/HeaderBar';
import BodyFront from '../../components/BodyFront/BodyFront';
import { ListData2 } from '@/translations/resources/en/ListData';
import Button from '@/components/Button/Button';
import getStyles from './styles';

const ListView2 = () => {
  const { t } = useTranslation('welcome');
  const { Common, Fonts, Gutters, Layout } = useTheme();
  const styles = getStyles(Fonts);

  const renderListSeperator = () => {
    return <View style={[Fonts.ListBorder]} />;
  };

  const renderItems = ({ item }: any) => {
    return (
      <View
        key={item.key}
        style={[
          Layout.row,
          Layout.fill,
          Gutters.smallBPadding,
          Gutters.smallTPadding,
          Gutters.extraLargeHMargin,
        ]}
      >
        <View style={[Layout.column, { flex: 0.5 }]}>
          <Text style={[styles.textNumbering]}>{item.key}</Text>
        </View>
        <View style={[Gutters.tinyHMargin, { flex: 2 }]}>
          <Text style={[styles.textNavn]}>{item.navn}</Text>
          <Text style={[styles.textCatagory]}>{item.category}</Text>
        </View>
        <View style={[{ flex: 1 }]}>
          <Text style={[styles.textPoeng]}>{item.poeng}</Text>
        </View>
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
            data={ListData2}
            renderItem={renderItems}
            ItemSeparatorComponent={renderListSeperator}
            style={[]}
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
            <Button
              name={t('PoiListeButton')}
              style={Common.button.secondary}
            />
            <Button name={t('KartButton')} style={Common.button.secondary} />
          </View>
        </View>
      </View>
    </CustomSafeArea>
  );
};

export default ListView2;
