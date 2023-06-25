import React, { useState } from 'react';
import { View, Text, Image, Modal, Keyboard, TouchableWithoutFeedback, LogBox } from 'react-native';
import { ratingStyle } from '../utils/styles/rating_style';
import { modalStyle } from '../utils/styles/modal_style';
import { globalStyles, images } from '../utils/styles/global';
import { UPDATE_BUTTON, DELETE_BUTTON } from '../utils/const/buttons';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewUpdateForm from './review_update_form';
import Card from '../components/card';
import Button from '../components/button';

export default function ReviewDetail({ navigation, route }) {

  LogBox.ignoreAllLogs(true);
  const { updateReview, deleteReview, reviewItem } = route.params;
  
  const [updateModal, setUpdateModal] = useState(false);
  const [displayedReview, setDisplayedReview] = useState(reviewItem);
  const { id, body, title, rating } = displayedReview;
  

  const deleteHandler = (id) => {
    deleteReview(id);
    navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>

      <Modal visible={updateModal} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={modalStyle.modalContent}>
            <MaterialIcons 
            name='close'
            size={24}
            onPress={() => setUpdateModal(false)}
            style={{...modalStyle.modalToggle, ...modalStyle.modalClosed}}
            />
            <ReviewUpdateForm 
              updateReview={updateReview}
              currentReview={displayedReview}
              setUpdateModal={setUpdateModal}
              setDisplayedReview={setDisplayedReview}  
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Card>
        <Text style={globalStyles.titleText}>{ title }</Text>
        <Text>" { body } "</Text>
        <View style={ratingStyle.rating}>
          <Text>Game Rating: </Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
      <View style={globalStyles.flexContainer}>
        <Button buttonType={UPDATE_BUTTON} handlerFunc={() => setUpdateModal(true)} />
        <Button buttonType={DELETE_BUTTON} handlerFunc={() => deleteHandler(id)}/>
      </View>
    </View>
  )
}
