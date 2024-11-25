import { wp } from '@/utils/layout-scaling';
import { StyleSheet} from 'react-native';


const getStyles = (fonts:any) =>
  StyleSheet.create({
    textNumbering: {
      ...fonts.textRegularMedium,
    },
    buttonContainer: {
      marginLeft: wp(108),
      marginRight: wp(108),
      marginTop: wp(20),
      marginBottom: wp(19),
    },

    textNavn: {
      ...fonts.textTiny,
      fontSize: wp(9),
    },
    textCatagory: {
      fontStyle: 'italic',
      height: wp(13),
      width: wp(165),
      fontFamily: 'Montserrat-Italic',
    },
    textPoeng: {
      color: '#6EB8EB',
      fontFamily: 'Montserrat-Bold',
      height: wp(15),
      width: wp(54),
      fontSize: wp(12),
      marginRight: wp(44),
    },
    bodyContainer: {
      backgroundColor: '#ffffff',
    },
  });
  export default getStyles