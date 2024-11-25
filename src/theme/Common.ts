/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native';
import buttonStyles from './components/Buttons';
import { CommonParams } from '../../@types/theme';
import { wp } from '@/utils/layout-scaling';

export default function <C>({ Colors, ...args }: CommonParams<C>) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      //Adding secondaryBackground color to common component
      backgroundSecondary:{
        backgroundColor: Colors.secondaryBackground,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        height: 45,
        borderRadius: 10,
        paddingStart: 20,
      }, 
      circle: {   // Adding circle styling
        width: wp(36),
        height: wp(36),
        borderRadius: wp(20),
        borderWidth: 5,
        borderColor: Colors.strongRed,
        borderStyle: 'solid',
        //justifyContent: 'center'
      },
      header : {           //Adding Headerbar
        //...Layout.fill, 
        backgroundColor: Colors.headerFooterBackgroundColor,
        height: wp(53), 
        width: wp(390), 
    }, 
    footer : {
      backgroundColor: Colors.headerFooterBackgroundColor,
      height: wp(69),
      width: wp(390), 
    }

    }),
  };
}
