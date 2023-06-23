import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../utils/styles/global';
import { modalStyle } from '../utils/styles/modal_style';
import { reviewsDummy } from '../utils/dummies/reviews_dummy';
import Card from '../components/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './review_form';

export default function Home({ navigation }) { 
  //automatically added props.navigation when a screen added to createStackNavigation
  
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews ] = useState(reviewsDummy);

  const pressHandler = (reviewItem) => {
    navigation.navigate('ReviewDetail', {reviewItem, deleteReview });
  }

  const addReview = (review) => {
    review.id = Math.floor(Math.random() * 900).toString()
    setReviews((currentReviews) => [review, ...currentReviews]);
    setModalOpen(false);
  }

  const deleteReview = (id) => {
    const newReviews = reviews.filter((review) => review.id != id);
    setReviews(newReviews);
  }

  return ( 
    <View style={globalStyles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={modalStyle.modalContent}>
            <MaterialIcons 
            name='close'
            size={24}
            onPress={() => setModalOpen(false)}
            style={{...modalStyle.modalToggle, ...modalStyle.modalClosed}}
            />
            <ReviewForm addReview={addReview}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons 
        name='add'
        size={24}
        onPress={() => setModalOpen(true)}
        style={modalStyle.modalToggle}
      />

      <FlatList 
        data={reviews}
        keyExtractor={( item ) => item.id}
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

