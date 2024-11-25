import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useTheme } from '../hooks';
import { useFlipper } from '@react-navigation/devtools';
import { ApplicationStackParamList } from '../../@types/navigation';
import Home from '@/screens/Home/Home';
import TourDetail from '../screens/TourDetail';
import MapboxScreen from '@/screens/Mapbox';
import { navigationRef } from './navUtils';
import SmallMapBox from '@/screens/Mapbox/SmallMapBox';
import Startup from '@/screens/Startup/Startup';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator<ApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  //const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="TourDetail" component={TourDetail} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MapboxScreen" component={MapboxScreen} />
          <Stack.Screen name="SmallMapBox" component={SmallMapBox} />

          {/* 
          <Stack.Screen name="Tour" component={Tour} />
          <Stack.Screen name="ListView" component={ListView} />
          <Stack.Screen name="ListView2" component={ListView2} />
          <Stack.Screen name="ListDescription" component={ListDescription} />
          <Stack.Screen name="Main" component={MainNavigator} /> 
          */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
