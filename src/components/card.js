import React from 'react';
import { View } from 'react-native';
import { cardStyle } from '../utils/styles/card_style';

export default function Card(props) {
    return (
        <View style={cardStyle.card}>
            <View style={cardStyle.cardContent}>
                { props.children }
            </View>
        </View>
    );
}