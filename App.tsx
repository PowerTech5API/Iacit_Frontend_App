import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/components/Login';
import CadastroUsuario from './src/components/CadastroUsuario';
import UserMenu from './src/components/UserMenu';
import RegistroOcorrenciaForm from './src/components/CadastroRO/RegistroOcorrenciaForm';
import AcompanharRO from './src/components/AcompanharRO';
import RoAtendida from './src/components/RoAtendida';
import RoAtendimento from './src/components/RoAtendimento';
import RoPendente  from './src/components/RoPendente';
import  FormProvider from './src/components/CadastroRO/formProvider'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FormProvider>
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
        <Stack.Screen name='RoAtendimento' component={RoAtendimento} />
        <Stack.Screen name='RoPendente' component={RoPendente} />
      </Stack.Navigator>
    </NavigationContainer>
    </FormProvider>
  );
}
