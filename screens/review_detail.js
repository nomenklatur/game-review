import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetail({ navigation, route }) {
  const { body, title, rating } = route.params
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{ title }</Text>
      <Text>Rating: { rating }/5</Text>
      <Text>" { body } "</Text>
    </View>
  )
}
