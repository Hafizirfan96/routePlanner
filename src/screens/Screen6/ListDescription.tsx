import CustomSafeArea from "@/components/CustomSafeArea";
import { useTheme } from "@/hooks";
import React from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, Text,TextInput, Image } from "react-native";
import { ScrollView} from "react-native-gesture-handler";
import { wp } from '@/utils/layout-scaling';
import HeaderBar from "../../components/Header/HeaderBar";
import BodyFront from "../../components/BodyFront/BodyFront";
import { ListData } from "@/translations/resources/en/ListData";
import CircleMarker from "@/components/CircleMarker/CircleMarker";
import Button from "@/components/Button/Button";
const ListDescription = () => { 

const { t } = useTranslation('welcome');
const { Common, Gutters , Layout, Colors, Fonts, Images }  = useTheme();

const replaceWord = () =>{
  if(t('paragraph2').match("Svenskemuren")){
    console.log("Found");
  }
}
    return(
    <CustomSafeArea>
        <ScrollView>
            <HeaderBar />
                <View style={[Layout.bodyHeight, 
                styles.bodyContainer]}     
                >
                    <BodyFront/>         
               { ListData.map ((item) => {
                    if( item.key ==='1') {
                        return(                    
                            <View key={ item.key }
                            style={[
                              Layout.row,
                              Layout.alignItemsCenter,
                              Gutters.smallTPadding,
                              Gutters.smallBPadding,]}
                          >
                      <CircleMarker data = { item.key }/>   
                          <View style={[ styles.textView ]}>
                                <Text style={[ styles.textNavn ]}
                                >
                                  {item.navn}
                                  </Text>
                          </View>
                              <Text style={[ styles.textPoeng ]}
                              >
                                {item.poeng}
                                </Text>
                          </View> )}})}
                          <Text style={[styles.textØye, Gutters.smallTPadding]}> 
                                {t('PostKoden')}</Text>
                                
                                <View style={[
                                    Layout.rowCenter,
                                    Gutters.mediumHMargin,
                                    Layout.justifyContentAround,
                                    Gutters.smallTPadding, 
                                    Gutters.smallBPadding]}
                                >
                                    <TextInput
                                        style={[
                                        Fonts.textTiny,
                                        Fonts.textLeft,
                                        styles.textInput
                                        ]}
                                        placeholder="PostKode"
                                        placeholderTextColor={Colors.lightGrey}
                                        
                                    />
                                    <Button name = { t('send') } style = {Common.button.base}/>
                                </View>

                                <View style={[  // ---> Image view 
                                    Layout.alignItemsCenter, 
                                    Gutters.mediumTMargin]}>
                                        <Image style={[
                                            styles.ImageProp]}
                                            source={Images.trailtheifLogo}/>
                                </View>
                                
                                <Text style={[
                                    styles.textProps,
                                    Gutters.smallTPadding,
                                ]}>{t('paragraph1')}
                                </Text>
                                
                                <Text style={[
                                    styles.textProps,
                                    Gutters.mediumTPadding,
                                    Gutters.mediumBPadding,
                                ]}> {t('paragraph2')}
                                </Text>
            </View>

            <View style={[Common.footer]}>
                    <View
                        style={[Layout.row,
                            styles.buttonContainer,
                            Layout.justifyContentAround]}
                    >
                        <Button 
                            name={t('PoiListeButton')} 
                            style ={Common.button.secondary}
                        /> 
                        <Button 
                            name={t('KartButton')} 
                            style ={Common.button.secondary}
                        /> 
                        <Button 
                            name={t('score')} 
                            style ={Common.button.secondary}
                        /> 
                </View>
              </View>
    </ScrollView>
    </CustomSafeArea>
    )
}
export default ListDescription;


const styles = StyleSheet.create({
    textInput:{
        height: wp(30), 
        width: wp(124), 
        marginLeft: wp(15), 
        paddingVertical: wp(7),
        borderColor: '#002439',
        borderWidth:1

      },
    ImageProp:{
        resizeMode:'contain',
        //height:'221pt',
        //width:'330pt'
      }, 
    buttonContainer: {
      marginLeft: wp(49),
      marginRight: wp(103),
      marginTop: wp(20),
      marginBottom: wp(19),
    },
    textView:{
      width:wp(168), 
      marginLeft:wp(13),
    }, 
    textNavn :{
      fontFamily: 'Montserrat-Bold' ,
      fontSize: wp(12), 
      lineHeight: wp(15),
      color: '#012439', 
    }, 
    textPoeng :{
      fontFamily: 'Montserrat-Bold' ,
      fontSize:wp(12) ,
      lineHeight:wp(25),
      marginRight:wp(44) ,
      letterSpacing:wp(0.5),
      color:'#6EB8EB',
    }, 
    bodyContainer: {
      backgroundColor: '#ffffff',
    }, 
    textØye:{

      textAlign:"center",
      fontSize: wp(14), 
      fontFamily: 'Montserrat-Bold' ,
      color: '#001D32',
      lineHeight: wp(22),
    }, 
   textProps: {
      width:wp(290), 
      fontFamily: 'Montserrat-Regular',
      fontSize:wp(14) ,
      textAlign:"left",
      marginLeft: wp(50), 
      marginRight: wp(50),
      
   }
  });
