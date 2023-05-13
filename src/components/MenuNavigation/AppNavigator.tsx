import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import AdminDrawerNavigation from './AdminNavigator'
import AuthNav from './AuthNavigator';
import UserDrawerNavigator from './UserNavigator';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{
            headerShown: false,
          }} >
      <Stack.Screen name="AuthNavigation" component={AuthNav} />
      <Drawer.Screen name="DrawerUser" component={UserDrawerNavigator} />
      <Drawer.Screen name="DrawerADM" component={AdminDrawerNavigation} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
