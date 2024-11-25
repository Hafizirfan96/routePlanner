import React from "react"
import { useTheme } from "@/hooks";
import { View } from "react-native";

const Footer = ( { Button, Button2 } : any)=> {
    const { Layout } = useTheme();
    return(<>
     <View
              style={[
                { width:390 },
                { height:69 },
                { marginRight: 775 },
                  Layout.row,
                { marginLeft:103 },
                { marginTop:20},
                //Gutters.smallTMargin,
              //Gutters.smallTPadding
            ]}
                ></View>
    </>)

}
export default Footer;