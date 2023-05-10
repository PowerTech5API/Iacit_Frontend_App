import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../User/Login';
import CadastroUsuario from '../User/CadastroUsuario';

const Stack = createNativeStackNavigator();

export default function AuthNav(){
    return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Login" component={Login}  screenOptions={{
              headerShown: false,
            }}/>
    <Stack.Screen name="CadastroUsuario" component={CadastroUsuario}  screenOptions={{
              headerShown: false,
            }}/>
  </Stack.Navigator>
    );
  }
  