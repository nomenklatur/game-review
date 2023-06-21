import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../utils/styles/global';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>This is the about screen</Text>
    </View>
  )
}
