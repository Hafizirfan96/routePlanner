import { wp } from '@/utils/layout-scaling';
import { StyleSheet } from 'react-native';

const getStyles = (
  fonts: any,
  colors: any,
  layout: any,
  gutters: any,
  FontSize: any,
) =>
  StyleSheet.create({
    header: {
      backgroundColor: colors.headerFooterBackgroundColor,
    },
    header1: {
      backgroundColor: colors.white,
    },

    mapSpace: {
      height: wp(196),
    },
    midHeading: {
      backgroundColor: colors.white,
      height: wp(180),
    },
    midHeadingText: {
      lineHeight: 25,
    },

    subHeding: {
      backgroundColor: colors.white,
    },

    dagerHeading: {
      backgroundColor: colors.white,
    },
    borderColor: {
      backgroundColor: colors.white,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: colors.darkGrey,
    },
    dagerSubHeading: {
      alignItems: 'center',
      marginTop: '27%',
    },

    doubleArrowText: {
      width: wp(50),
      fontSize: 12,
      letterSpacing: 0.5,
    },
    navigationView: {
      flex: 1,
      marginTop: '27%',
    },

    navigationView1: {
      backgroundColor: colors.headerFooterBackgroundColor,
      width: wp(155),
      height: wp(30),
    },
    navigationText: {
      color: colors.white,
      alignContent: 'center',
      fontSize: 12,
      letterSpacing: 0.6,
      fontFamily: 'Montserrat-SemiBold',
    },

    dager: {
      letterSpacing: 0.5,
      fontSize: 10,
      fontFamily: 'Montserrat-SemiBold',
    },
    dagerView: {
      width: '82%',
    },

    headerBottom: {
      flex: 0.35,
      backgroundColor: colors.headerFooterBackgroundColor,
    },
    headerBottom1: {
      backgroundColor: colors.white,
      width: wp(130),
      height: wp(20),
      alignSelf: 'center',
    },
    bottomText: {
      color: colors.headerFooterBackgroundColor,
      letterSpacing: 0.6,
      fontSize: 12,
      alignSelf: 'center',
    },
  });
export default getStyles;
