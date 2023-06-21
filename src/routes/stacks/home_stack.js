import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../../screens/home';
import ReviewDetail from '../../screens/review_detail';
import Header from '../../components/header';

const homeStack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <homeStack.Navigator>
      <homeStack.Screen 
        name='Home Screen' 
        component={Home} 
        options={({navigation}) => ({
          headerTitle: () => <Header navigation={navigation}/>
        })}
      />
      <homeStack.Screen 
        name='ReviewDetail' 
        component={ReviewDetail} 
      />
    </homeStack.Navigator>
  )
}