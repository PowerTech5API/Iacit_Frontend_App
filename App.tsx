import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/components/Login';
import CadastroUsuario from './src/components/CadastroUsuario';
import UserMenu from './src/components/UserMenu';
import RegistroOcorrenciaForm from './src/components/CadastroRO/RegistroOcorrenciaForm';
import AcompanharRO from './src/components/AcompanharRO';
import RoAtendida from './src/components/RoAtendida';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Stack.Screen name="UserMenu" component={UserMenu} />
        <Stack.Screen name="CadastroRO" component={RegistroOcorrenciaForm} />
        <Stack.Screen name='AcompanharRO' component={AcompanharRO} />
        <Stack.Screen name='RoAtendida' component={RoAtendida} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
