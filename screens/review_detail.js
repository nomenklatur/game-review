import React from 'react';
import { View, Text } from 'react-native/types';
import { globalStyles } from '../styles/global';

export default function ReviewDetail() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>This is the review detail screen</Text>
    </View>
  )
}
