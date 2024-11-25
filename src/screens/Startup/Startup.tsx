import React, { useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { Brand } from '../../components';
import { setDefaultTheme } from '../../store/theme';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { reduxStorage } from '@/store';
import { navigate } from '@/navigators/navUtils';

const Startup = ({ navigation }: ApplicationScreenProps) => {
  const code = reduxStorage.getItem('code');

  const { Layout, Gutters, Fonts } = useTheme();

  const { t } = useTranslation();

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    await setDefaultTheme({ theme: 'default', darkMode: null });

    if (code._j !== '' && undefined) {
      navigate('TourDiscripition');
    } else {
      navigate('Home');
    }
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'TourDiscripition' }],
    // });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t('welcome:title')}</Text>
    </View>
  );
};

export default Startup;
