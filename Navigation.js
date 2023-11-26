
import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import BottomBar from './Bottomnav';
const Stack = createStackNavigator();

function Navigation() {
  return (
      <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="BottomBar" component={BottomBar} />
      </Stack.Navigator>
  );
}

export default Navigation;
