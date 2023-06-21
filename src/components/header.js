import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { headerStyle } from '../utils/styles/header_style';

export default function Header({ navigation }){
  const toggleMenu = () => {
    navigation.openDrawer();
  }

  return (
    <ImageBackground style={headerStyle.header} source={require('../../assets/images/game_bg.png')}>
      <MaterialIcons name='menu' size={28} style={headerStyle.icon} onPress={toggleMenu} />
      <View style={headerStyle.headerTitle}>
        <Image source={require('../../assets/images/heart_logo.png')} style={headerStyle.headerImage} />
        <Text style={headerStyle.headerText}>Gamezone</Text>
      </View>
    </ImageBackground>
  );
}
