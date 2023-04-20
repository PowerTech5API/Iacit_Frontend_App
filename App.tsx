import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/components/User/Login';
import CadastroUsuario from './src/components/User/CadastroUsuario';
import UserMenu from './src/components/User/UserMenu';
import RegistroOcorrenciaForm from './src/components/CadastroRO/RegistroOcorrenciaForm';
import AcompanharRO from './src/components/RO/AcompanharRO';
import RoAtendida from './src/components/RO/RoAtendida';
import RoAtendimento from './src/components/RO/RoAtendimento';
import RoPendente  from './src/components/RO/RoPendente';
import  FormProvider from './src/components/CadastroRO/formProvider'
import AdminMenu from './src/components/Admin/AdminMenu';
import CadastroROBackup from './src/components/CadastroROBackup/cadastroROBackup';


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
        <Stack.Screen name="AdminMenu" component={AdminMenu} />
        <Stack.Screen name="CadastroROBackup" component={CadastroROBackup} />
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
