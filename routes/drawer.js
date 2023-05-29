import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './home_stack';
import AboutStack from './about_stack';

const drawerNavigator = createDrawerNavigator();

export default function Drawer(){
  return (
    <NavigationContainer>
      <drawerNavigator.Navigator initialRouteName="Home" screenOptions={ { headerShown: false }}>
        <drawerNavigator.Screen name='HomeStack' component={HomeStack}/>
        <drawerNavigator.Screen name='AboutStack' component={AboutStack} />
      </drawerNavigator.Navigator>
    </NavigationContainer>
  )
}