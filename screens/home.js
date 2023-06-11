import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './review_form';

export default function Home({ navigation }) { //automatically added props.navigation when a screen added to createStackNavigation
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews ] = useState([
    { title: 'Game 1', rating: 1, body: 'some review', key: 1},
    { title: 'Game 2', rating: 2, body: 'some review', key: 2},
    { title: 'Game 3', rating: 3, body: 'some review', key: 3},
  ]);

  const pressHandler = (reviewItem) => {
    navigation.navigate('ReviewDetail', reviewItem);
  }

  const addReview = (review) => {
    review.key = Math.floor(Math.random() * 900).toString()
    setReviews((currentReviews) => [review, ...currentReviews]);
    setModalOpen(false);
  }

  return ( 
    <View style={globalStyles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback>
          <View style={styles.modalContent}>
            <MaterialIcons 
            name='close'
            size={24}
            onPress={() => setModalOpen(false)}
            style={{...styles.modalToggle, ...styles.modalClosed}}
            />
            <ReviewForm addReview={addReview}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons 
        name='add'
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />

      <FlatList 
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Card>
              <Text style={globalStyles.titleText}>{ item.title }</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export const styles  = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClosed: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  }
})