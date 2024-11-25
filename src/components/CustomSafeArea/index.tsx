import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks';
import { useRoute } from '@react-navigation/native';
import { CustomSafeAreaType } from '@/interfaces/shared/CustomSafeAreaType';

const CustomSafeArea = (props: CustomSafeAreaType) => {
  const { Colors, darkMode } = useTheme();
  const route = useRoute();
  let topColor = '';
  let bottomColor = '';
  switch (route.name.toLowerCase()) {
    case 'LoginScreen':
      topColor = Colors.white;
      bottomColor = Colors.primaryBackground;
      break;
    case 'filter':
    case 'teacherselector':
    case 'classlist':
      topColor = Colors.lightGrey;
      bottomColor = darkMode ? Colors.primaryBackground : Colors.white;
      break;
    case 'messagedetails':
    case 'term':
      topColor = Colors.white;
      bottomColor = darkMode ? Colors.success : Colors.white;
      break;

    default:
      topColor = Colors.lightGrey;
      bottomColor = darkMode ? Colors.primaryBackground : Colors.lightGrey;
  }

  if (props.topColor) {
    topColor = props.topColor;
  }

  if (props.bottomColor) {
    bottomColor = props.bottomColor;
  }

  const styles = getStyles(topColor, bottomColor);
  return (
    <>
      <SafeAreaView style={styles.topArea} />
      <SafeAreaView style={styles.bottomArea}>{props.children}</SafeAreaView>
    </>
  );
};

export default CustomSafeArea;

const getStyles = (topColor: string, bottomColor: string) =>
  StyleSheet.create({
    topArea: {
      flex: 0,
      backgroundColor: topColor,
    },
    bottomArea: {
      flex: 1,
      backgroundColor: bottomColor,
    },
    container: {
      flex: 1,
      backgroundColor: 'transparent',
    },
  });
