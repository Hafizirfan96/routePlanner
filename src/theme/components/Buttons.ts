import { wp } from '@/utils/layout-scaling';
import { StyleSheet } from 'react-native';
import { CommonParams } from '../../../@types/theme';

export default function <C>({
  Fonts,
  Colors,
  Gutters,
  Layout,
}: CommonParams<C>) {
  const base = {
    ...Layout.center,
    ...Gutters.largeHPadding,
    height: wp(28),
    width: '100%',
    backgroundColor: Colors.primary,
    paddingVertical: wp(7),
  };
  //Added the secondary background color 
  const secondary ={
    ...Layout.center,
    ...Gutters.smallHPadding,
    height: wp(28),
    width: '100%',
    backgroundColor: Colors.secondaryBackground,
    paddingVertical: wp(7),
  };

  const rounded = {
    ...base,
    borderRadius: 10,
  };

  return StyleSheet.create({
    base,
    secondary, //added the styling to secondary
    
    rounded,
    
    outline: {
      ...base,
      backgroundColor: Colors.primaryBackground,
      //borderWidth: 2,
      //borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    outlineFill: {
      ...base,
      backgroundColor: Colors.primaryBackground,
    },
    buttonText: {
      ...Fonts.textTiny,
      ...Fonts.textUppercase,
      ...Fonts.textCenter,
      color: Colors.white,
    },
  });
}
