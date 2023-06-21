import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import About from '../../screens/about';
import Header from '../../components/header';

const aboutStack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <aboutStack.Navigator>
      <aboutStack.Screen 
        name='About Gamezone' 
        component={About}
        options={({navigation}) => ({
          headerTitle: () => <Header navigation={navigation}/>
        })}
      />
    </aboutStack.Navigator>
  )
}