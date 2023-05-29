import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) { //automatically added props.navigation when a screen added to createStackNavigation
  const [reviews, setReviews ] = useState([
    { title: 'Game 1', rating: 1, body: 'some review', key: 1},
    { title: 'Game 2', rating: 2, body: 'some review', key: 2},
    { title: 'Game 3', rating: 3, body: 'some review', key: 3},
  ]);
  const pressHandler = (reviewItem) => {
    navigation.navigate('ReviewDetail', reviewItem);
  }
  return ( 
    <View style={globalStyles.container}>
      <FlatList 
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}