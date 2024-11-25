/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { wp } from '../utils/layout-scaling';

/**
 * Colors
 */
export const Colors = {
  // Example.tsx colors:
  transparent: 'rgba(0,0,0,0)',
  primaryBackground: '#002337',
  secondaryBackground: '#6EB8EB',
  disableButtonBg: '#DBF9FF',
  headerFooterBackgroundColor: '#002439',
  primaryTextColor: '#002337',
  secondaryTextColor: '#FFFFFF',
  buttonColor: '#6EB8EB',

  success: '#43F8B6',
  successDisable: '#D0FDED',

  error: '#FF8274',
  errorDisable: '#FFEFEE',
  warning: '#F9C66B',

  white: '#ffffff',
  black: '#000000',
  lightGrey: '#999999',
  darkGrey: '#EEEEEE',
  darkerGrey: '#2C2C2C',
  mediumGrey: '#D9D9DC',
  lightBlue: '#F5FAFF',
  darkBlue: '#2A2859',
  veryDarkBlue: '#012439',
  lightText: '#666666',
  strongRed: '#B8001C',
  ListBorderColor: '#E0E0E0', //Adding ListBordercolor
  blackBlue: '#001D32', //Adding new color

  inputBackground: '#FFFFFF',
  text: '#212529',
  primary: '#E14032',
  green: '#53CA5E',
};

export const NavigationColors = {
  primary: Colors.primaryTextColor,
};

/**
 * FontSize
 */
export const FontSize = {
  tiny: wp(11),
  smallTiny: wp(12), // Font size 12
  small: wp(13),
  smallNormal: wp(14), //Adding Font size 14
  normal: wp(15),
  regular: wp(18),
  regularMedium: wp(20), //Adding new Font size to numbers
  medium: wp(21),
  large: wp(40),
  exLarge: wp(50),
};

/**
 * Metrics Sizes
 */
const tiny = wp(5); // 10
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const medium = tiny * 4; // 40
const mediumPlus = tiny * 5; // 50
const mediumlittPlus = tiny * 6; //Adding new for lagetnavn
const large = tiny * 7; // 30
const extraLarge = tiny * 8; // 30
const xxLarge = tiny * 10;
export const MetricsSizes = {
  tiny,
  small,
  regular,
  medium,
  mediumPlus,
  mediumlittPlus,
  large,
  extraLarge,
  xxLarge,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};
