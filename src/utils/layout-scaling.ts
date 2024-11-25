import { Dimensions, PixelRatio, Platform } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const wp = (dimension: number, isScale: boolean = true): number => {
  let fontScale = PixelRatio.getFontScale();
  const screenWidth = Dimensions.get('screen').width;

  let scalingFactor = 1.5;
  if (Platform.isPad) {
    return moderateScale(dimension, 0.3 * fontScale);
  } else if (Platform.OS === 'ios') {
    scalingFactor = screenWidth > 375 ? 1.5 : 2.0;
    //fontScale = fontScale < 2.65 ? fontScale : 2.65
    return !isScale
      ? scale(dimension)
      : moderateScale(dimension, fontScale * scalingFactor);
  }

  scalingFactor = fontScale;
  if (screenWidth <= 320) {
    scalingFactor = fontScale < 2 ? -1.5 : -1.7;
  } else if (screenWidth <= 360) {
    scalingFactor = fontScale < 2 ? fontScale : 5;
  } else {
    scalingFactor = fontScale < 1 ? fontScale : fontScale * 1.2;
  }
  return moderateScale(dimension, fontScale * scalingFactor);
};
// export const wp = (dimension: number): number => {
//   return Platform.isPad ? moderateScale(dimension, 0.3) : scale(dimension)
// }

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const hp = (dimension: number): number => {
  //return hp2dp((dimension / 760) * 100 + '%')
  return verticalScale(dimension);
};

export const ms = (size: number, factor: number = 0.5): number =>
  moderateScale(size, factor);
export const mvs = (size: number, factor: number = 0.5): number =>
  moderateVerticalScale(size, factor);
