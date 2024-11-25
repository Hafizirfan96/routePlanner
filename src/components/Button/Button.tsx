import React from "react";
import {  TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from "@/hooks";
import { Text} from 'react-native';
import { useTranslation } from "react-i18next";

const Button = ( { name , style} :any ) => {

    const { Common } = useTheme();
    const { t } = useTranslation();
    
    return(
                <TouchableOpacity
                        accessible={true}
                        accessibilityRole="button"
                        accessibilityLabel={name}
                        accessibilityHint={''}
                        style={[[style]]}
                        activeOpacity={0.8}
                        >
                            <Text style={[Common.button.buttonText]}>
                            {t(name)}
                            </Text>
                    </TouchableOpacity>
    )

}
export default Button;
