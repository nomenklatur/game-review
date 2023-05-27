import React from 'react';
import { View, Text } from 'react-native/types';
import { globalStyles } from '../styles/global';

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>This is the home screen</Text>
    </View>
  )
}