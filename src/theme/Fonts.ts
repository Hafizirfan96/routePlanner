/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native';
import { ThemeVariables } from '../../@types/theme';
import { wp } from '../utils/layout-scaling';

export default function ({ FontSize, Colors }: ThemeVariables) {
  const base = {
    ...mediumFontFamily,
    color: Colors.primaryTextColor,
    lineHeight: wp(14),
  };

  const baseBold: any = {
    ...base,
    ...boldFontFamily,
    //fontWeight: 'bold',
  };

  return StyleSheet.create({
    textTiny: {
      ...base,
      fontSize: FontSize.tiny,
      color: Colors.text,
    },
    textSmall: {
      ...base,
      fontSize: FontSize.small,
      color: Colors.text,
      lineHeight: wp(21),
    },
    textRegular: {
      ...base,
      fontSize: FontSize.regular,
      color: Colors.text,
      lineHeight: wp(24),
    },
    textRegularMedium: {
      //Adding new style for numbering in list
      ...boldFontFamily,
      fontSize: FontSize.regularMedium,
      color: Colors.blackBlue,
    },
    textLarge: {
      ...base,
      fontSize: FontSize.large,
      color: Colors.text,
    },
    textBold: {
      fontWeight: 'bold',
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    smallTiny: {
      //Adding new font size 12 here
      fontSize: FontSize.smallTiny,
    },
    smallNormal: {
      fontSize: FontSize.smallNormal,
    },
    titleSmall: {
      fontSize: FontSize.small * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleRegularMedium: {
      //Adding new for Lagets navn
      fontSize: FontSize.regularMedium,
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },

    textError: {
      color: Colors.error,
    },
    textSuccess: {
      color: Colors.success,
    },
    textPrimary: {
      color: Colors.primary,
    },
    textLobster: {
      fontFamily: 'lobster',
      fontWeight: 'normal',
    },
    ListBorder: {
      //Adding new style for List boarder
      height: 1,
      width: '100%',
      backgroundColor: Colors.ListBorderColor,
    },
    HeaderTitle: {
      fontSize: FontSize.tiny * 2,
      fontWeight: 'bold',
      color: Colors.white,
      textAlign: 'center',
    },
  });
}
export const regularFontFamily = {
  fontFamily: 'Montserrat-Regular',
};
export const boldFontFamily = {
  fontFamily: 'Montserrat-Bold',
};

export const mediumFontFamily = {
  fontFamily: 'Montserrat-SemiBold',
};

export const baseText = {
  ...regularFontFamily,
};
