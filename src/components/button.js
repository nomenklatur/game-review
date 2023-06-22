import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { buttonStyleGenerator } from '../utils/styles/button_style';
import { FontAwesome } from '@expo/vector-icons';

export default function Button({buttonType, handlerFunc}) {
    const { color, text, iconName } = buttonType;
    const buttonStyle = buttonStyleGenerator(color);

    return (
        <TouchableOpacity onPress={ handlerFunc }>
            <View style={buttonStyle.button}>
            <FontAwesome name={iconName} size={18} color="white" style={buttonStyle.icon}/>
                <Text style={buttonStyle.buttonText}>
                    { text }
                </Text>
            </View>
        </TouchableOpacity>
    )
}