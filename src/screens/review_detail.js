import React from 'react';
import { View, Text, Image } from 'react-native';
import { ratingStyle } from '../utils/styles/rating_style';
import { globalStyles, images } from '../utils/styles/global';
import Card from '../components/card';

export default function ReviewDetail({ navigation, route }) {
  const { body, title, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{ title }</Text>
        <Text>" { body } "</Text>
        <View style={ratingStyle.rating}>
          <Text>Game Rating: </Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
    </View>
  )
}
