import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetail({ navigation, route }) {
  const { body, title, rating } = route.params
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{ title }</Text>
        <Text>Rating: { rating }/5</Text>
        <Text>" { body } "</Text>
      </Card>
    </View>
  )
}
